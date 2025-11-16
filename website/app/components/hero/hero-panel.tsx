// import { easeOut, motion, useScroll, useTransform } from 'framer-motion'
// import { DateTime } from 'luxon'
// // import DGreen from '~/images/hero/d-green.svg?react'
// // import DPink from '~/images/hero/d-pink.svg?react'
// // import DPurple from '~/images/hero/d-purple.svg?react'
// import { Box, Flex, styled } from '~/styled-system/jsx'
// import { HeaderContainer } from '../page-layout'
// import sunset_perth from '~/images/svg/sunset_perth.svg?react'

// export function HomepageHeroPanel({ conferenceDate }: { conferenceDate: string | undefined }) {
//     // const { scrollY } = useScroll()

//     // const y2 = useTransform(scrollY, [0, 400], [0, 100], { ease: easeOut })
//     // const y3 = useTransform(scrollY, [0, 400], [0, 200], { ease: easeOut })

//     return (
//         <Flex
//             height="auto" // You might want to set a minHeight, like `minHeight="80vh"`
//             overflow="hidden"
//             direction="column"
//             alignItems="center"
//             width="full"
//             gap={6}
//             pt={{ base: 6, md: 12, lg: 24 }}
//             pb={{ base: 12, md: 24 }} // Add some padding at the bottom
//             position="relative" // This is crucial for the overlay

//             // --- NEW BACKGROUND STYLES ---
//             bgImage={`url(${sunset_perth})`}
//             bgSize="cover"
//             bgPosition="center"
//             bgRepeat="no-repeat"
            
//             // --- STYLES FOR THE DARK OVERLAY ---
//             _before={{
//                 content: '""',
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 bottom: 0,
//                 bg: 'rgba(11, 19, 43, 0.4)', // 40% opaque dark blue
//                 zIndex: 1,
//             }}
//         >
//             {/* All your child elements (HeaderContainer, etc.) need a zIndex to appear above the overlay */}
//             <HeaderContainer position="relative" zIndex={2}>
//                 {/* ... your h1 and h2 text ... */}
//             </HeaderContainer>
//         </Flex>
//         // <Flex
//         //     height="auto"
//         //     overflow="hidden"
//         //     direction="column"
//         //     alignItems="center"
//         //     width="full"
//         //     // gradientFrom="#070727"
//         //     // gradientTo="#0E0E43"
//         //     gap={6}
//         //     pt={{ base: 6, md: 12, lg: 24 }}
//         //     // bgGradient="to-b"
//         //     md={{ gap: '12' }}
//         //     lg={{ gap: '20' }}
//         //     xl={{
//         //         gap: '24',
//         //     }}
//         // >
//         //     <HeaderContainer>
//         //         {conferenceDate ? (
//         //             <styled.h2
//         //                 color="#ffffffff"
//         //                 fontSize={{ base: 'md', md: 'xl' }}
//         //                 fontWeight={{ base: 'medium', md: 'semibold' }}
//         //                 textWrap="nowrap"
//         //                 maxWidth="3/4"
//         //             >
//         //                 <styled.span>
//         //                     {DateTime.fromISO(conferenceDate).toLocaleString(DateTime.DATE_HUGE, {
//         //                         locale: 'en-AU',
//         //                     })}
//         //                 </styled.span>
//         //                 <styled.span display="none" md={{ display: 'inline' }}>
//         //                     {' '}
//         //                     •{' '}
//         //                 </styled.span>
//         //                 <styled.span display="block" md={{ display: 'inline' }}>
//         //                     St Catherine's College at Curtin University
//         //                 </styled.span>
//         //             </styled.h2>
//         //         ) : null}
//         //         <styled.h1
//         //             fontFamily="display"
//         //             color="white"
//         //             w="full"
//         //             fontWeight="black"
//         //             textWrap="balance"
//         //             lineHeight={1.2}
//         //             fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
//         //             maxWidth={{ base: 'full', md: '3/4', lg: '3/4' }}
//         //         >
//         //             A one-day, hands-on AI event helping teams discover, use, and get inspired by the latest tools.
//         //         </styled.h1>
//         //     </HeaderContainer>
//         //     <Box
//         //         width="full"
//         //         position="relative"
//         //         height={350}
//         //         sm={{ height: 400 }}
//         //         md={{ height: 600 }}
//         //         lg={{ height: 700 }}
//         //         xl={{ height: 900 }}
//         //     >
//         //         <Box
//         //             position="absolute"
//         //             zIndex={3}
//         //             bottom={0}
//         //             // bgGradient="to-b"
//         //             // gradientFrom="transparent"
//         //             // gradientTo="#0E0E43"
//         //             width="full"
//         //             height={200}
//         //             sm={{ height: 300 }}
//         //             md={{ height: 400 }}
//         //             lg={{ height: 500 }}
//         //             xl={{ height: 700 }}
//         //         ></Box>
//         //         <motion.div style={{ position: 'absolute', top: '0', left: '4%', zIndex: 2, width: '38%' }}>
//         //             <DGreen style={{ width: '100%', height: 'auto' }} />
//         //         </motion.div>
//         //         <motion.div
//         //             style={{
//         //                 position: 'absolute',
//         //                 top: '0',
//         //                 marginTop: '20px',
//         //                 left: '30%',
//         //                 zIndex: 1,
//         //                 y: y2,
//         //                 width: '38%',
//         //             }}
//         //         >
//         //             <DPink style={{ width: '100%', height: 'auto' }} />
//         //         </motion.div>
//         //         <motion.div
//         //             style={{
//         //                 position: 'absolute',
//         //                 top: '0',
//         //                 marginTop: '40px',
//         //                 left: '56%',
//         //                 transform: 'translateX(-50%)',
//         //                 y: y3,
//         //                 width: '38%',
//         //             }}
//         //         >
//         //             <DPurple style={{ width: '100%', height: 'auto' }} />
//         //         </motion.div>
//         //     </Box>
//         // </Flex>
//     )
// }

// import { DateTime } from 'luxon'

// import perthSunsetSVG from '~/images/svg/sunset_perth.svg' 

// import { Box, Flex, styled } from '~/styled-system/jsx'
// import { HeaderContainer } from '../page-layout'

// export function HomepageHeroPanel({ conferenceDate }: { conferenceDate: string | undefined }) {

//     return (
//         <Flex
//             height="auto"
//             overflow="hidden"
//             direction="column"
//             alignItems="center"
//             width="full"
//             gap={6}
//             pt={{ base: 6, md: 12, lg: 24 }}
//             md={{ gap: '12' }}
//             lg={{ gap: '20' }}
//             xl={{
//                 gap: '24',
//             }}
//         >
//             {/* 2. ADD A zIndex TO THE TEXT CONTAINER TO BRING IT TO THE FRONT */}
//             <HeaderContainer>
//                 {conferenceDate ? (
//                     <styled.h2
//                         color="#ffffffff"
//                         fontSize={{ base: 'md', md: 'xl' }}
//                         fontWeight={{ base: 'medium', md: 'semibold' }}
//                         textWrap="nowrap"
//                         maxWidth="3/4"
//                     >
//                         <styled.span>
//                             {DateTime.fromISO(conferenceDate).toLocaleString(DateTime.DATE_HUGE, {
//                                 locale: 'en-AU',
//                             })}
//                         </styled.span>
//                         <styled.span display="none" md={{ display: 'inline' }}>
//                             {' '}
//                             •{' '}
//                         </styled.span>
//                         <styled.span display="block" md={{ display: 'inline' }}>
//                             St Catherine's College at Curtin University
//                         </styled.span>
//                     </styled.h2>
//                 ) : null}
//                 <styled.h1
//                     fontFamily="display"
//                     color="white"
//                     w="full"
//                     fontWeight="black"
//                     textWrap="balance"
//                     lineHeight={1.2}
//                     fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
//                     maxWidth={{ base: 'full', md: '3/4', lg: '3/4' }}
//                 >
//                     A one-day, hands-on AI event helping teams discover, use, and get inspired by the latest tools.
//                 </styled.h1>
//             </HeaderContainer>

//             <Box width="full" position="relative">
//                 <styled.img
//                     src={perthSunsetSVG}
//                     alt="Perth skyline"
//                     style={{
//                         width: '100%',
//                         height: 'auto',
//                     }}
//                 />

//                 <Box
//                     position="absolute"
//                     top={0}
//                     left={0}
//                     width="full"
//                     height="full"
//                     bg="rgba(11, 19, 43, 0.4)"
//                 />
//             </Box>
//         </Flex>
//     )
// }

import { motion, useScroll, useTransform } from 'framer-motion'
import { DateTime } from 'luxon'
import perthSunsetSVG from '~/images/svg/sunset_perth.svg'
import { Box, Flex, styled } from '~/styled-system/jsx'
import { HeaderContainer } from '../page-layout'

// Motion-enabled image
const MotionImage = styled(motion.img)

export function HomepageHeroPanel({ conferenceDate }: { conferenceDate: string | undefined }) {
    // Parallax scroll
    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 500], [0, 120])

    return (
        <Flex
            position="relative"
            minHeight={{ base: '70vh', md: '90vh' }}
            alignItems="center"
            justifyContent="center"
            width="full"
            overflow="hidden"
            textAlign="center"
        >
            {/* -------------------------------------------------- */}
            {/* BACKGROUND IMAGE (parallax)                       */}
            {/* -------------------------------------------------- */}
            <MotionImage
                src={perthSunsetSVG}
                alt="Perth skyline at sunset for AI Disrupt Summit"
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.55,  // Softens detail for readability
                    y,
                    zIndex: 1,
                }}
            />

            <Box
                position="absolute"
                bottom={0}
                left={0}
                width="100%"
                height="60%"
                style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0))"
                }}
                zIndex={2}
            />

            <Box
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="30%"
                style={{
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0))"
                }}
                zIndex={2}
            />


            {/* -------------------------------------------------- */}
            {/* TEXT LAYER                                         */}
            {/* -------------------------------------------------- */}
            <HeaderContainer>
                {conferenceDate ? (
                    <styled.h2
                        color="white"
                        fontSize={{ base: 'md', md: 'xl' }}
                        fontWeight={{ base: 'medium', md: 'semibold' }}
                        mb={4}
                    >
                        <styled.span>
                            {DateTime.fromISO(conferenceDate).toLocaleString(DateTime.DATE_HUGE, {
                                locale: 'en-AU',
                            })}
                        </styled.span>
                        <styled.span display="none" md={{ display: 'inline' }}> • </styled.span>
                        <styled.span display="block" md={{ display: 'inline' }}>
                            St Catherine&apos;s College at Curtin University
                        </styled.span>
                    </styled.h2>
                ) : null}

                <styled.h1
                    fontFamily="display"
                    color="white"
                    w="full"
                    fontWeight="black"
                    textWrap="balance"
                    lineHeight={1.2}
                    fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
                    textShadow="0px 3px 12px rgba(0, 0, 0, 0.6)"
                >
                    A one-day, hands-on AI event helping teams discover, use, and get inspired by the latest tools.
                </styled.h1>
            </HeaderContainer>
        </Flex>
    )
}
