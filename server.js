const PORT = 3010;
const app = require('./app')
const http = require('http');
const server = http.createServer(app)
const api = require('binance');
const binanceWS = new api.BinanceWS(true);
const io = require('socket.io')(server, {
  transports: ['websocket', 'polling']
})

const streams = binanceWS.streams;
io.on('connection', client => {
  binanceWS.onCombinedStream(
    [
      streams.ticker('BNBBTC')
    ],
    streamEvent => {
      client.emit('bitdata', {
        data: streamEvent.data
      });
    }
  );

});

server.listen(PORT, () => { console.log("Server is actie at port 3010") })