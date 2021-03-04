import footerData from '@/assets/json/footer-data.json'
import { CardContent, LegalLink, CommunityMediaIcon } from '@/components/app/footer/footer'

export function getFooterCardContents(): Array<CardContent> {
  return footerData.cardContents
}

export function getFooterLegalLinks(): Array<LegalLink> {
  return footerData.legalLinks
}

export function getFooterCommunityMediaIcons(): Array<CommunityMediaIcon> {
  return footerData.communityMediaIcons
}
