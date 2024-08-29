import {useRef, useState} from "react";
import {Box, HStack} from "@chakra-ui/react";
import {Editor} from "@monaco-editor/react";

import Output from "./Output";
import LanguageChooser from "./LanguageChooser";
import {CODE_STARTER} from "../constants";


const CodeEditor = () => {
    const editorRef = useRef();
    const [value, setValue] = useState("");
    const [language, setLanguage] = useState("python");
    /*const [history, setHistory] = useState([]);

    const handleCodeChange = (e) => {setHistory([...history, code]);setCode(e.target.value);
    };
    const handleUndo = () => {const previousCode = history.pop();setHistory(history);setCode(previousCode || '');
    };
    only if we want to
    */
    const onMount = (editor) => {editorRef.current = editor;editor.focus();};
    const onSelect = (language) => {setLanguage(language);setValue(CODE_STARTER[language]);};
    return (
        <Box>
        <HStack spacing={4}>
            <Box w="50%">
                <LanguageChooser language={'▾ ' + language } onSelect={onSelect} />
                <Editor
                    options={{
                    minimap: {enabled: false,},
                    }}
                    height="75vh"
                    theme="vs-dark"
                    language={language}
                    defaultValue={CODE_STARTER[language]}
                    onMount={onMount}
                    value={value}
                    onChange={(value) => setValue(value)}
                />
            </Box>
            <Output editorRef={editorRef} language={language} />
        </HStack>
        </Box>
    );
};
export default CodeEditor;
