import footerData from '@/assets/json/footer-data.json'
import { CardContent, LegelLink, CommunityMediaIcon } from '@/components/app/footer/footer'

export function getFooterCardContents(): Array<CardContent> {
  return footerData.cardContents
}

export function getFooterLegelLinks(): Array<LegelLink> {
  return footerData.legelLinks
}

export function getFooterCommunityMediaIcons(): Array<CommunityMediaIcon> {
  return footerData.communityMediaIcons
}