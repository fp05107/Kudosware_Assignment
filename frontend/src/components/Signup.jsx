import {
  Flex,
  Select,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Radio,
  RadioGroup,
  FormHelperText,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    resume: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  let countries = [
    "Brazil",
    "China",
    "Egypt",
    "France",
    "Australia",
    "Japan",
    "Turki",
    "Iran",
    "India",
    "Irak",
    "Pakistan",
    "Bangladesh",
    "Soth Korea",
    "North Korea",
    "West Indies",
    "Argentina",
  ];

  countries.sort();

  const handleFileUpload = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      resume: event.target.files[0],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Send form data to backend API
    console.log(formData);
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.900")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Please Enter All The Details ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? "text" : "password"} />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="resume" mb={4}>
              <FormLabel>Resume</FormLabel>
              <Input type="file" name="resume" onChange={handleFileUpload} />
            </FormControl>
            <Select placeholder="Select option">
              {countries.map((country, index) => {
                return (
                  <option key={index} value={country}>
                    {country}
                  </option>
                );
              })}
            </Select>

            <FormControl as="fieldset">
              <FormLabel as="legend" htmlFor={null}>
                Favorite Naruto Character
              </FormLabel>
              <RadioGroup defaultValue="Itachi">
                <HStack spacing="24px">
                  <Radio value="Male">Male</Radio>
                  <Radio value="Female">Female</Radio>
                  <Radio value="Prefer Not To Say">Prefer Not To Say</Radio>
                  <Radio value="Other">Other</Radio>
                </HStack>
              </RadioGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={() => handleSubmit}
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Submit
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user? <Link color={"blue.400"}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

{
  /* <option value="option2">USA</option>
<option value="option3">Australia</option>
<option value="option3">New Zealand</option>
<option value="option3">China</option>
<option value="option3">Pakistan</option>
<option value="option3">Nepal</option>
<option value="option3">South Africa</option>
<option value="option3">United Kingdom</option>
<option value="option3">West Indies</option>
<option value="option3">Bangladesh</option>
<option value="option3">Malyasia</option>
<option value="option3">South Korea</option>
<option value="option3">North Korea</option>
<option value="option3">Sri Lanka</option>
<option value="option3">Japan</option>
<option value="option3">Indonesia</option>
<option value="option3">Brazil</option>
<option value="option3">France</option>
<option value="option3">Turki</option>
<option value="option3">Iran</option>
<option value="option3">Irak</option>
<option value="option3">Canada</option>
<option value="option3">Germany</option>
<option value="option3">Argemntina</option>
<option value="option3">Egypt</option> */
}
