import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image';
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'

function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack>
            <Circle position="absolute" bg="blue.100" opacity="0.1"
                w="300px" h="300px" alignSelf="flex-end" />
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                    <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' >Abdul Latif Munjiat</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}>Full Stack Web Developer of https://invesnow.id. <br /> Experienced frontend engineer with has passion in Information Technology and mutual fund investment platform. Skilled in frontend technology such as Vue.Js, React.js. Create Invesnow's frontend web platform</Text>
                    <Button mt={8} colorScheme="blue" onClick={() =>
                        window.open("https://abdullatifmunjiat.com")
                    }>Hire Me</Button>

                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" src='https://media-exp1.licdn.com/dms/image/C5603AQF_7ZDmmrmY1g/profile-displayphoto-shrink_400_400/0/1616090248073?e=1664409600&v=beta&t=kDs-m_y9JDuW-d0UtYcOyyzbzfRhfKlGSVuBaKHx3ks' />
            </Flex>

        </Stack>
    )
}

export default Header