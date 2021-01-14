import React from 'react'
import {Button} from '../../globalStyles'
import {
    FooterContainer,
    FooterSubHeading,
    FooterSubscription,
    FooterSubText,
    Form,
    FormInput,
    FooterLink,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinkTitle,
    FooterLinksContainer, SocialMedia,
    SocialMediaWrap,
    SocialLogo, SocialIcon,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './Footer.elements'
import {
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaYoutube,
    FaInstagram
} from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to recieve the latest news and trends
                </FooterSubHeading>
                <FooterSubText>
                    You may unsubscribe at anytime
                </FooterSubText>
                <Form>
                    <FormInput name='email' type='email' placeholder='Your Email' />
                    <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How It Works</FooterLink>
                        <FooterLink to='/sign-up'>Testimonials</FooterLink>
                        <FooterLink to='/sign-up'>Careers</FooterLink>
                        <FooterLink to='/sign-up'>Investors</FooterLink>
                        <FooterLink to='/sign-up'>Terms of Service</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>Contact</FooterLink>
                        <FooterLink to='/sign-up'>Support</FooterLink>
                        <FooterLink to='/sign-up'>Destinations</FooterLink>
                        <FooterLink to='/sign-up'>Sponsorship</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to='/sign-up'>Submit Video</FooterLink>
                        <FooterLink to='/sign-up'>Ambassadors</FooterLink>
                        <FooterLink to='/sign-up'>Agency</FooterLink>
                        <FooterLink to='/sign-up'>Influencers</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to='/sign-up'>Instagram</FooterLink>
                        <FooterLink to='/sign-up'>Facebook</FooterLink>
                        <FooterLink to='/sign-up'>Youtube</FooterLink>
                        <FooterLink to='/sign-up'>Twitter</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>

            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        <SocialIcon /> MOKONE
                    </SocialLogo>
                    <WebsiteRights>MOKONE 2020</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Youtube' rel='noopener noreferrer'>
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Twitter' rel='noopener noreferrer'>
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='LinkedIn' rel='noopener noreferrer'>
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
