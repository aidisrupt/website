import Logo from '~/images/svg/final_logo.svg?react'
import { css } from '~/styled-system/css'
import { Box, Divider, Flex, Grid, styled } from '~/styled-system/jsx'
import { socialsData } from '../../config/socials-data'
import { AppLink } from '../app-link'

export const Footer = () => (
    <Box
        mt={48}
        gap={6}
        mx="5"
        xl={{
            mx: 0,
        }}
    >
        <Divider color="#8D8DFF33" mb={6} />
        <Grid
            gridTemplateColumns="1fr"
            md={{ gridTemplateColumns: 'repeat(4, 1fr)' }}
            width="full"
            gap={6}
            maxW="1200px"
            mx="auto"
        >
            <Flex flexGrow={2}>
                <Logo width={200} />
            </Flex>
            <Flex direction="column" gap={1} fontWeight="medium">
                <AppLink to="/agenda" variant="primary">
                    Agenda
                </AppLink>
                <AppLink to="/about" variant="primary">
                    About
                </AppLink>
                <AppLink to="/faq" variant="primary">
                    FAQ
                </AppLink>
                <AppLink to="/admin" variant="primary">
                    Admin
                </AppLink>
            </Flex>
            <Flex direction="column" gap={1} fontWeight="medium">
                <AppLink to="/vision" variant="primary">
                    Vision
                </AppLink>
                <AppLink to="/venue" variant="primary">
                    Venue
                </AppLink>
                <AppLink to="/volunteer" variant="primary">
                    Want to Volunteer?
                </AppLink>
            </Flex>
            <Flex direction="column" gap={4}>
                {/* <styled.p color="#C2C2FF" fontSize="2xl" lineHeight={1.2} textWrap="balance">
                    Subscribe for the latest DDD updates
                </styled.p>
                <styled.input
                    type="email"
                    placeholder="Email Address"
                    bg="#0E0E43"
                    color="white"
                    borderRightRadius="full"
                    px={4}
                    py={2}
                    fontSize="lg"
                    border="1px solid #8D8DFF33"
                    _placeholder={{ color: '#8282FB' }}
                    mb={4}
                /> */}
                <Flex direction="row" gap={1}>
                    {socialsData.map((item) => (
                        <styled.a
                            aria-label={`Visit us on ${item.title}`}
                            key={item.link}
                            href={item.link}
                            target={`_blank`}
                            rel={`nofollow noopener`}
                            display="flex"
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            <item.icon
                                className={css({
                                    w: '8',
                                    color: '#8282FB',
                                    transition: 'colors',
                                    _hover: { color: 'white' },
                                })}
                            />
                        </styled.a>
                    ))}
                </Flex>
            </Flex>
        </Grid>
    </Box>
)
