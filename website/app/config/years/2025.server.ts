import { DateTime } from 'luxon'
import type { ConferenceYear } from '~/lib/config-types.server'

import { SESSIONIZE_2025_ALL_SESSIONS, SESSIONIZE_2025_SESSIONS } from '~/lib/config.server'
import { curtinVenue } from '../venues/st-cats-curtin'

export const conference2025: ConferenceYear = {
    kind: 'conference',
    year: '2025',
    venue: curtinVenue,

    sessionizeUrl: undefined,

    sessions: {
        kind: 'sessionize',
        allSessionsEndpoint: SESSIONIZE_2025_ALL_SESSIONS,
        sessionizeEndpoint: SESSIONIZE_2025_SESSIONS,
        underrepresentedGroupsQuestionId: undefined,
    },

    conferenceDate: DateTime.fromISO('2025-12-13T09:00:00', {
        zone: 'Australia/Perth',
    }),
    
    agendaPublishedDateTime: DateTime.fromISO('2025-08-11T00:00:00', {
        zone: 'Australia/Perth',
    }),
    
    cfpDates: {
        opens: DateTime.fromISO('2025-05-05T00:00:00', {
            zone: 'Australia/Perth',
        }),
        closes: DateTime.fromISO('2025-06-15T23:59:59', {
            zone: 'Australia/Perth',
        }),
    },
    talkVotingDates: {
        opens: DateTime.fromISO('2025-07-01T09:00:00', {
            zone: 'Australia/Perth',
        }),
        closes: DateTime.fromISO('2025-07-20T23:59:59', {
            zone: 'Australia/Perth',
        }),
    },
    ticketReleases: [
        {
            releaseName: 'Early Bird',
            price: '$60',
            range: {
                opens: DateTime.fromISO('2025-03-13T05:00:00', {
                    zone: 'Australia/Perth',
                }),
                closes: DateTime.fromISO('2025-04-30T23:59:59', {
                    zone: 'Australia/Perth',
                }),
            },
        },
        {
            releaseName: 'General',
            // Probably
            price: '$80',
            range: {
                opens: DateTime.fromISO('2025-05-01T00:00:00', {
                    zone: 'Australia/Perth',
                }),
                closes: DateTime.fromISO('2025-09-12T07:59:59', {
                    zone: 'Australia/Perth',
                }),
            },
        },
        {
            releaseName: 'Final Release',
            // Probably
            price: '$100',
            range: {
                opens: DateTime.fromISO('2025-09-12T08:00:00', {
                    zone: 'Australia/Perth',
                }),
                closes: DateTime.fromISO('2025-09-19T23:59:59', {
                    zone: 'Australia/Perth',
                }),
            },
        },
    ],

    feedbackOpenUntilDateTime: undefined,

    ticketInfo: {
        type: 'tito',
        accountId: 'dddperth',
        eventId: '2025',
    },

    sponsors: {
       
        community: [
                            {
                                name: 'Bloom',
                                website: 'https://bloom.org.au/',
                                logoUrlDarkMode: '/images/sponsors/2025-bloom-dark.svg',
                                logoUrlLightMode: '/images/sponsors/2025-bloom-light.svg',
                            },
                            {
                                name: 'Curtin Commercialisation and Entrepreneurship',
                                website: 'https://www.curtin.edu.au/engage/entrepreneurs/',
                                logoUrlDarkMode: '/images/sponsors/curtin_logo.svg',
                                logoUrlLightMode: '/images/sponsors/curtin_logo.svg',
                            },
                            {
                                name: 'DDD Perth',
                                website: 'https://dddperth.com/',
                                logoUrlDarkMode: '/images/sponsors/DDD_logo.svg',
                                logoUrlLightMode: '/images/sponsors/DDD_logo.svg',
                            },
                            {
                                name: 'Blackbird',
                                website: 'https://www.blackbird.vc/',
                                logoUrlDarkMode: '/images/sponsors/blackbird_logo.svg',
                                logoUrlLightMode: '/images/sponsors/blackbird_logo.svg',
                            },
                            {
                                name: 'WA Data Science Innovation Hub',
                                website: 'https://wadsih.org.au/',
                                logoUrlDarkMode: '/images/sponsors/WADSIH.svg',
                                logoUrlLightMode: '/images/sponsors/WADSIH.svg',
                            },
                            {
                                name: 'Lovable',
                                website: 'https://lovable.dev/',
                                logoUrlDarkMode: '/images/sponsors/loveable_logo.svg',
                                logoUrlLightMode: '/images/sponsors/loveable_logo.svg',
                            },
                            {
                                name: 'Matilda',
                                website: 'https://www.matilda.health/',
                                logoUrlDarkMode: '/images/sponsors/matilda.svg',
                                logoUrlLightMode: '/images/sponsors/matilda.svg',
                            },
                            {
                                name: 'Lance East Office',
                                website: 'https://lanceeast.com.au/',
                                logoUrlDarkMode: '/images/sponsors/LEO_logo.svg',
                                logoUrlLightMode: '/images/sponsors/LEO_logo.svg',
                            },
                            
                        ],
    },
}
