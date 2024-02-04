interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Bangers ‘n’ Biz',
    description: `My intention is to use this space to share anything music related that excites me within three areas of the music industry: Music Creation, Technology, and Business.`,
    imgSrc: '/static/images/bangers-n-biz.png',
    href: 'https://youtube.com/@BangersNBiz',
  },
  {
    title: 'Game Development',
    description: `Some of the small games I've done over the years. Why don't you give them a spin?`,
    imgSrc: '/static/images/unsplash/game-dev.jpeg',
    href: 'https://happystinson.itch.io/',
  },
  {
    title: 'Photography',
    description: `Learning the art of capturing the moment with cool snaps.`,
    imgSrc: '/static/images/flickr.jpeg',
    href: 'https://www.flickr.com/people/ras-nordling',
  },
  {
    title: 'Songwriting',
    description: `There was something on my mind and then I recorded it to music.`,
    imgSrc: '/static/images/unsplash/guitar-fretboard.jpeg',
    href: 'https://soundcloud.com/happystinson/sets/original-songs',
  },
]

export default projectsData
