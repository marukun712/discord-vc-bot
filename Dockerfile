FROM aoirint/voicevox_engine:cpu-ubuntu20.04-latest
RUN docker pull aoirint/voicevox_engine:cpu-ubuntu20.04-latest
RUN docker run --rm -it -p '127.0.0.1:50021:50021' aoirint/voicevox_engine:cpu-ubuntu20.04-latest