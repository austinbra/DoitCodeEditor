import {Box,Button,Menu,MenuButton,MenuItem,MenuList,Text,} from "@chakra-ui/react";
  import {LANGUAGES} from "../constants";
  const languages = Object.entries(LANGUAGES);
  const ACTIVE_COLOR = "#625EC5";
  const LanguageChooser = ({language,onSelect,handleUndo}) => {
    return (
        <Box ml={2} mb={4}>
            <Text mb={2} fontSize="lg">
            Language:
            </Text>
            <Menu isLazy>
                <MenuButton as={Button}>{language}</MenuButton>
                <MenuList bg="#110c1b">
                    {languages.map(([lang,version]) => (
                    <MenuItem
                        key={lang}
                        color={lang === language ? ACTIVE_COLOR : ""}
                        bg={lang === language ? "gray.900":"transparent"}
                        _hover={{color: ACTIVE_COLOR,bg: "gray.900",}}
                        onClick={() => onSelect(lang)}
                    >
                        {lang}
                        &nbsp;
                        <Text as="span" color="gray.600" fontSize="sm">
                        ({version})
                        </Text>
                    </MenuItem>
                    ))}
                </MenuList>
                <Button onClick={handleUndo} size='sm' mt={2} colorScheme='purple' ml={4}>Undo</Button>
            </Menu>
        </Box>
    );
  };
  export default LanguageChooser;
