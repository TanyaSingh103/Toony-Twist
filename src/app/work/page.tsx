import { AspectRatio } from '@/components/ui/aspect-ratio'

export default function Page() {
  const TOONS = [
    {
      name: 'Tom And Jerry',
      description: 'Only realized Jerry was the evil one after I grew up lol',
      playlistLink: 'https://www.youtube.com/playlist?list=PLbEif3LMBbrxFaXONS-1Uf51G0hkzQ3j4',
      gameURL: 'https://www.tomandjerrychaseasia.com/',
      videoUrl: 'https://www.youtube.com/embed/t0Q2otsqC4I',
    },
    {
      name: 'Mr. Bean',
      description: 'Oh how I loved his lil teddy bear and that green car(I never got over the intro music btw)',
      playlistLink: 'https://youtube.com/playlist?list=PL03E61EE42BBA9181&si=zIDUkCYPTKWljp3g',
      gameURL: 'https://www.boomerangtv.co.uk/shows/mr-bean/games',
      videoUrl: 'https://www.youtube.com/embed/vXlxGh0UK7g'
    },
    {
      name: 'Pink Panther',
      description: 'This panther slayed pink better than all of us tbh',
      playlistLink: 'https://youtube.com/playlist?list=PL8Cbfhf704NSAHu9hu7OCm5ztYtbnr--L&si=U2xpfLiUYi7bTQFY',
      gameURL: 'https://oldgamesdownload.com/pink-panther-pinkadelic-pursuit/',
      videoUrl: 'https://www.youtube.com/embed/bYCBkMPosOE'
    },
    {
      name: 'Doraemon',
      description: 'And how can I forget the classic, doraemon movies were GOLD',
      playlistLink: 'https://youtube.com/playlist?list=PLNpGCUDlw9tqbII-5vXHN9FoTfgzOjUnO&si=7GBJb3PKkrgxWVzb',
      gameURL: 'https://www.play-games.com/doraemon-games.html',
      videoUrl: 'https://www.youtube.com/embed/2cjGo7rqFVg'
    },
  ]

  return (
    <>
      {TOONS.map((project, id) => {
        return (
          <div
            className="dark:bg-darkBg text-text dark:text-darkText border-b-4 border-r-4 border-b-black border-r-black bg-bg p-8 py-10 w600:px-[30px] w400:px-5"
            key={id}
          >
            <div className="mx-auto w-3/4 w800:w-full">
              {project.videoUrl ? (
                <AspectRatio
                  className="!-bottom-[2px] rounded-base border-2 border-black shadow-base"
                  ratio={16 / 9} // Aspect ratio for the video
                >
                  <iframe
                    className="w-full h-full" // Ensure it takes the full width and height
                    src={project.videoUrl}
                    title={project.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </AspectRatio>
              ) : (
                <AspectRatio
                  className="!-bottom-[2px] rounded-base border-2 border-black shadow-base"
                  ratio={2 / 1}
                >
                  <img
                    className="w-full rounded-base"
                    alt={project.name}
                  />
                </AspectRatio>
              )}

              <div className="mt-6">
                <h2 className="text-3xl font-bold w700:text-2xl w450:text-xl">
                  {project.name}
                </h2>

                <p className="mt-5 text-lg w450:text-base">
                  {project.description}
                </p>

                <div className="mt-8 grid grid-cols-2 gap-5 text-base w400:text-sm">
                  <a
                    className="border-border dark:border-darkBorder text-text shadow-light dark:shadow-dark cursor-pointer rounded-base border-2 bg-main px-4 py-2 text-center uppercase transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none"
                    href={project.playlistLink}
                    target="_blank"
                    rel="noopener noreferrer" // Recommended for security
                  >
                    Playlist
                  </a>
                  <a
                    className="border-border dark:border-darkBorder text-text shadow-light dark:shadow-dark cursor-pointer rounded-base border-2 bg-main px-4 py-2 text-center uppercase transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none"
                    href={project.gameURL}
                    target="_blank"
                    rel="noopener noreferrer" // Recommended for security
                  >
                    Game
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
