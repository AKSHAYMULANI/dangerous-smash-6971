import { Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";




function Navbar(){
    return (
        <Flex width={'90%'}
              m={'auto'}
              justifyContent={'space-between'}
              alignItems={'center'}
              textAlign={'center'}
              alignContent={'center'}>
            <Flex justifyContent={'space-evenly'} w={'60%'} alignItems={'center'}
              textAlign={'center'}
              alignContent={'center'} fontSize={'12px'}>
                <Flex >
                    <Link to={'/'}>
                    <img 
                    width={"100px"} 
                    src="data:image/png;base64,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" 
                    alt="Logo" />
                    </Link>
                </Flex>
                <Flex justifyContent={'space-evenly'} w={'60%'}>
                <p>Product</p>
                <Link to={'/pricing'}><p>Pricing</p></Link>
                <p>Solution</p>
                <p>Customers</p>
                <p>Resources</p>
                <p>Partners</p>
                </Flex>
            </Flex>    
            <Flex 
              w={'250px'}
              m={'auto'}
              justifyContent={'space-between'}
              alignItems={'center'}
              textAlign={'center'}
              alignContent={'center'}>
                <Flex  fontSize={'12px'}>
                <img width={'15px'} src='https://webstatic.chargebee.com/assets/web/519/images/globe2.svg' alt="Earth"/>
                <p style={{ 'paddingLeft':'5px','paddingRight': '5px'}}>English</p>
                </Flex>
                <Flex  fontSize={'12px'}>
                <img width={'15px'}
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Orange_lock.svg/1200px-Orange_lock.svg.png' 
                alt="Lock"/>
                <Link to={'/login'}><p style={{ 'paddingLeft':'5px'}}>Log in</p></Link>
               
                </Flex>
                <Flex style={{ 'paddingLeft':'5px','paddingRight': '5px'}} >
                    <Button borderRadius={'1px'} alignContent={'center'} alignItems={'center'} p={'5px'} height={'30px'} color='white' bgColor='#FF6900' variant='solid'>Get a Demo &gt; </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Navbar