import Head from "next/head";

export function HeadDocument() {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Lucas Biasi | Front-end Developer | Portfolio</title>
      <link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />
      <meta
        name="title"
        content="Lucas Biasi | Front-end Developer | Portfolio"
      />
      <meta
        name="description"
        content="Me chamo Lucas Biasi e este é meu portfolio"
      />
      <meta name="robots" content="index, follow" />

      <meta name="author" content="Lucas Biasi" />
      <meta
        name="keywords"
        content="lucas biasi biasi developer, 
          desenvolvedor, programador, front-end, developer, typescript,
          reactjs, nextjs, caixetadev, caixeta portfolio, lucas biasi portfolio,
          developer front-end, javascript, biasi, desenvolver sites"
      />
      <meta property="og:url" content="https://biasiportfolio.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Biasi | Front-end Developer | Portfolio"
      />
      <link rel="canonical" href="https://biasiportfolio.vercel.app/" />
      <meta
        property="og:description"
        content="Especialista em desenvolvimento Front-End"
      />
      <meta property="og:locale" content="pt_BR" />
      <meta name="revisit-after" content="1 day" />

      <meta
        name="google-site-verification"
        content="fZ7fzHydKZu0nz8NHzxtboFYMUHL2MBh-yIeV1PW99I"
      />
    </Head>
  );
}
