```
npm install
```
後、

```
docker build ./ -t voicevox
```

```
docker run --rm -it -p '127.0.0.1:50021:50021' aoirint/voicevox_engine:cpu-ubuntu20.04-latest
```

```
node index.js
```
