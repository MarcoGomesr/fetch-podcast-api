
# Technical Test

-  look the preview on this [webite](https://fetch-podcast-api.vercel.app/)

 

### Notes

  - Made with nextjs,tailwind, typescript, vitest for testing even though it was not a require for the test I made a few test only
  - I use app/ as the main template the rest of the files are outside app/ example components folder
  - didn't work much on the responsive
  - use eslint standard


### How to install the application

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Run Test

```bash
npm run test
# or
yarn test
# or
pnpm test
```
## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.





### Podcast Homapage
[x] Mostrar el listado de los 100 podcasts más populares según el listado de Apple

[x] Una vez obtenido el listado desde el servicio externo por primera vez se deberá almacenar en cliente de manera que solo se vuelva a solicitar si ha pasado más de un día desde la última vez que se solicitó.

[x] El usuario podrá filtrar los podcasts mostrados introduciendo una cadena de texto que tendrá en cuenta tanto el título de los podcasts así como los nombres de sus autores.

[x] El filtrado deberá ser inmediato de manera que reaccione a medida que el usuario vaya introduciendo su texto de filtrado.

[x] Al pulsar sobre un podcast el usuario deberá navegar a la vista con el detalle del mismo.

### Podcast details page
[x] Se debe mostrar una barra lateral con la imagen del podcast, su título, su autor y su descripción.

[x] Se debe mostrar una sección principal donde se visualizará el número de episodios

[x] que actualmente tiene el podcast así como un listado de los mismos indicando su título, fecha de publicación y duración.

[x] Una vez obtenido el detalle de un podcast desde el servicio externo por primera vez, se deberá almacenar en cliente de manera que solo se vuelva a solicitar si ha pasado un día desde la última vez que se solicitó.

[x] Al pulsar sobre el título de un episodio se deberá navegar a la vista con el detalle del mismo.

### Podcast detail episode
[x]Se debe mostrar la misma barra lateral que en la vista anterior. Tanto la imagen como el título del podcast y el autor deben ser enlaces a la vista con el detalle del podcast (se permite que estos componentes también tengan los mismos enlaces en la vista anterior).

[x] Se debe mostrar una sección principal donde se visualizará el título del podcast, su descripción y un reproductor de audio básico (nativo HTML5) para reproducir el podcast.

[x] Se deberá tener en cuenta que algunas descripciones de episodios contienen HTML y este se debe mostrar interpretado (no escapado).


[x] El título de la aplicación deberá actuar como enlace a la vista principal de la
aplicación.

[x] Cada vez que se inicie una navegación en cliente se debe mostrar algún tipo de indicador visual en la esquina superior derecha de la página para reflejar que el proceso está en marcha. Dicho indicador deberá desaparecer tras finalizar la transición a la nueva vista.




