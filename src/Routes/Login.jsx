import { Box, Flex, Image, Stack } from "@chakra-ui/react"
import { Link } from "react-router-dom"

function Login(){
    return (
        <Box bgColor={'#EAEAF4'} h={'1000px'}>
            <Flex width={'90%'}
              m={'auto'}
              justifyContent={'space-between'}
              alignItems={'center'}
              textAlign={'center'}
              alignContent={'center'}
              
              >
               
                    <Flex >
                        <Link to={'/'}>
                        <img 
                        width={"100px"} 
                        src="https://ml.globenewswire.com/Resource/Download/921260e3-aadd-4bad-82cc-90613f2b1e99?size=2" 
                        alt="Logo" />
                        </Link>
                 
                    </Flex>    
                <Flex 
                    justifyContent={'end'}
                   >
                    <Flex  fontSize={'15px'}>
                    <p style={{'color':'gray'}}><i>Don't have an account?</i></p>
                    </Flex>
                    <Flex ml={'5px'} fontSize={'15px'}>
                    <Link to={'/signup'}><h1>Sign Up → </h1></Link>
                    </Flex>
                </Flex>
        </Flex>
            <Flex borderRadius={'15px'} h={'800px'} w={'70%'} bgColor={'white'} p={'50px'} m={'20px auto'}>
                <Box w={'50%'} textAlign="left">
                <Image w={'50px'} h={'50px'} p={'5px'} borderRadius={'20px'} src="https://d2jxbtsa1l6d79.cloudfront.net/static/app-static-assets/core/core-2.2.9/images/brand/cn-logo-white.svg" bgColor={'#6200EA'} />
                <Stack fontSize={'12px'} letterSpacing={'3px'} mt={'10px'} color={'gray.600'}><p>ANNOUNCING SUMMER 2022 PRODUCT RELEASE</p></Stack>
                <Stack mt={'5px'} lineHeight={'15px'}><h1>Monetize Effectively to Tackle Market Turbulence</h1></Stack>
                </Box>
               
            </Flex>
    
        </Box>
    )
}

export default Login