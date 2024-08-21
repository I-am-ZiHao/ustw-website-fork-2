import {
  FacebookIcon,
  InstagramIcon,
  PodcastIcon,
  XIcon,
  ThreadsIcon,
  YoutubeIcon,
  MailIcon,
} from '@/common/styles/assets/Icons'
import type React from 'react'

type SocialLinkItem = {
  icon: React.ReactNode
  url: string
}

type SubLinkItem = {
  type: 'title'
  title: string
  subLinks: Array<SubLinkItem>
} | {
  type: 'subLink'
  title: string
  url: string
}

export default function useLinks () {
  const socialLinkItems: Array<SocialLinkItem> = [
    {
      icon: <FacebookIcon />,
      url: '/#',
    },
    {
      icon: <XIcon />,
      url: '/#',
    },
    {
      icon: <InstagramIcon />,
      url: '/#',
    },
    {
      icon: <PodcastIcon />,
      url: '/#',
    },
    {
      icon: <ThreadsIcon />,
      url: '/#',
    },
    {
      icon: <YoutubeIcon />,
      url: '/#',
    },
    {
      icon: <MailIcon />,
      url: '/#',
    },
  ]

  // TODO: 這邊的資料要從 Content Manager 撈
  const subLinkItems: Array<SubLinkItem> = [
    {
      type: 'title',
      title: 'USTW',
      subLinks: [
        {
          type: 'subLink',
          title: 'Our Mission',
          url: '/#',
        },
        {
          type: 'subLink',
          title: 'Our Footprints',
          url: '/#',
        },
        {
          type: 'subLink',
          title: 'Our Ｍember',
          url: '/#',
        },
        {
          type: 'subLink',
          title: 'Our Newsroom',
          url: '/#',
        },
        {
          type: 'subLink',
          title: 'Article',
          url: '/#',
        },
        {
          type: 'subLink',
          title: 'Events',
          url: '/#',
        },
        {
          type: 'subLink',
          title: 'Ketagalan Media',
          url: '/#',
        },
        {
          type: 'subLink',
          title: 'Articles',
          url: '/#',
        },
        {
          type: 'subLink',
          title: 'About',
          url: '/#',
        },
      ],
    },
    {
      type: 'title',
      title: 'Discover',
      subLinks: [
        {
          type: 'subLink',
          title: 'Bills',
          url: '/#',
        },
        {
          type: 'subLink',
          title: 'People',
          url: '/#',
        },
      ],
    },
    {
      type: 'title',
      title: 'Podcasts',
      subLinks: [
        {
          type: 'subLink',
          title: '觀測站底加辣',
          url: '/#',
        },
        {
          type: 'subLink',
          title: '觀測站予你知',
          url: '/#',
        },
        {
          type: 'subLink',
          title: '觀測站讀書會',
          url: '/#',
        },
      ],
    },
  ]

  return {
    socialLinkItems,
    subLinkItems,
  }
}