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
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { postData } from "./api.js";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    resume: null,
    country: "",
    gender: "",
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
  let genders = ["Male", "Female", "Others"];

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Send form data to backend API
    if (
      formData.email === "" ||
      formData.firstname === "" ||
      formData.resume === ""
    ) {
      alert("Please enter all Required Details");
    } else {
      postData(formData);
      console.log(formData);
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        resume: null,
        country: "",
        gender: "",
      });
    }
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
            Register
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
                  <Input
                    name="firstname"
                    type="text"
                    value={formData.firstname}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    name="lastname"
                    type="text"
                    value={formData.lastname}
                    onChange={handleInputChange}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                name="email"
                value={formData.email}
                type="email"
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  name="password"
                  value={formData.password}
                  type={showPassword ? "text" : "password"}
                  onChange={handleInputChange}
                />
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
            <FormControl id="resume" mb={4} isRequired>
              <FormLabel>Resume Link</FormLabel>
              <Input type="url" name="resume" onChange={handleInputChange} />
            </FormControl>
            <FormLabel>Country</FormLabel>
            <Select
              placeholder="Select option"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
            >
              {countries.map((country, index) => {
                return (
                  <option key={index} value={country}>
                    {country}
                  </option>
                );
              })}
            </Select>
            <FormLabel>Gender</FormLabel>
            <Select
              placeholder="Select option"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            >
              {genders.map((gender, index) => {
                return (
                  <option key={index} value={gender}>
                    {gender}
                  </option>
                );
              })}
            </Select>

            <Stack spacing={10} pt={2}>
              <Button
                type="submit"
                onClick={handleSubmit}
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
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
