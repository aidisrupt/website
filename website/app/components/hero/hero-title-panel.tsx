import { Box, Flex, styled } from '~/styled-system/jsx'
import { ctaButton } from '../../recipes/button'

export function HeroTitlePanel() {
    return (
        <Box className={`homepage-title-panel`} w="100%" position="relative" color="white" zIndex="2">
            <Box className={`container-wrapper`} w="100%" maxW="1200px" mx="auto">
                <Box
                    className={`padding-wrapper`}
                    w="100%"
                    px="6"
                    py="8"
                    sm={{ px: '8', py: '10' }}
                    lg={{ px: '10', py: '12' }}
                    xl={{ px: '12', py: '16' }}
                >
                    <Box
                        className={`content-wrapper`}
                        w="100%"
                        display="flex"
                        flexDir="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        sm={{ justifyContent: 'center', alignItems: 'center' }}
                    >
                        <Flex
                            className={`paragraph-wrapper`}
                            w="100%"
                            maxWidth="3/5"
                            direction="column"
                            fontSize="2xl"
                            fontWeight="medium"
                            gap={6}
                        >
                            <p>
                                AI Disrupt Summit is a one-day, hands-on event bringing together Western Australia's AI community—engineers,
                                founders, researchers, and investors who aren't just talking about the future of AI, they're building it. 
                                Taking place on Saturday, December 13, 2025, at Curtin University as part of West Tech Fest, the summit 
                                features practical workshops, startup demos, and inspiring talks from some of Australia's leading AI thinkers. 
                                From hands-on hackathons to live demonstrations, this event is designed to give you the tools, knowledge, 
                                and connections to turn ideas into real-world AI solutions.
                            </p>
                            <p>
                                Unlike traditional conferences, AI Disrupt Summit is all about building and collaborating. Attendees can 
                                join interactive sessions, connect with mentors and industry leaders, explore cutting-edge local AI startups 
                                at the expo, and learn what investors are looking for in the next wave of AI ventures. With limited spots and a 
                                focus on practical experience, this is your chance to plug into WA's most innovative AI community, develop real
                                 projects, and shape the future of technology—plus enjoy networking over breakfast and a sundowner to cap off the day.
                            </p>
                        </Flex>
                        <Box
                            className={`buttons-wrapper`}
                            w="100%"
                            display="flex"
                            flexDir="column"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            mt="6"
                            gap="4"
                            sm={{ flexDir: 'row', justifyContent: 'center', alignItems: 'center', mt: '8' }}
                            lg={{ mt: '10' }}
                        >
                            <styled.a
                                href="/buy-tickets"
                                className={`${ctaButton({ visual: 'primary', size: 'lg', width: 'full' })}`}
                            >
                                Buy tickets
                            </styled.a>
                            <styled.a
                                href="/submit-presentation"
                                className={`${ctaButton({ visual: 'secondary', size: 'lg', width: 'full' })}`}
                            >
                                Submit presentation
                            </styled.a>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
