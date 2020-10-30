# Best Practices in Dockerfile

## Dockerfile context

|- Folder Principale

        |- dockerfiles/
            |- Dockerfile
            |- Context/

Questa può rappresentare una struttura comoda per ordinare la propria immagine docker da sviluppare; nella folder principale andremo a creare una folder dedicata a docker in cui salviamo il DockerFile e nella sottocartella Context tutti i sorgenti che ci servono.

## Leggere un dockerfile da stdin

### Senza contesto
Questo approccio permette di lanciare una build docker senza la necessità di creare un dockerfile, questo perchè verrà passato direttamente dall'output di un comando precedente, esempio:

```echo -e 'FROM busybox\nRUN echo "hello world"' | docker build -```

Il "-" nel comando docker build dice a docker di non utilizzare una folder come context ma di utilizzare l'output di un comando messo in pipe precedentemente

### Con contesto
E' come il comando precedente ma permette di configurare anche il contesto che può essere una folder locale o un url remoto:

```
docker build [OPTIONS] -f- <context_directory/url> . <<EOF
FROM busybox
COPY somefile.txt .
RUN cat /somefile.txt
EOF
```