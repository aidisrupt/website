import type { DateTime } from 'luxon'
import type { ImportantDate } from '~/lib/important-dates'
import { Box, Flex } from '~/styled-system/jsx'
import { ImportantDates, Workshops } from '../page-components/important-dates'
import { HeaderContainer } from '../page-layout'
import { HomepageHeroPanel } from './hero-panel'

export function Hero({
    currentDate,
    conferenceDate,
    importantDates,
}: {
    currentDate: DateTime
    conferenceDate: string | undefined
    importantDates: ImportantDate[]
}) {
    return (
        <Box overflowX="hidden">
            <HomepageHeroPanel conferenceDate={conferenceDate} />
            <HeaderContainer>
                <Flex flexDirection="column" gap={12}>
                    <Flex
                        className={`paragraph-wrapper`}
                        direction="column"
                        fontSize={{ base: 'lg', md: '2xl' }}
                        fontWeight="medium"
                        color="white"
                        gap={6}
                        maxWidth={800}
                        mx="auto"
                    >
                    <p>
                        AI Disrupt Summit is a one-day, hands-on event bringing together Western Australia's students, AI engineers,
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
                            projects, and shape the future of technology - plus enjoy networking over breakfast and a sundowner to cap off the day.
                    </p>
                    </Flex>
                </Flex>
            </HeaderContainer>
        </Box>
    )
}
