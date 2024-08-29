export const LANGUAGES = {
  python: "3.10.0",
  java: "15.0.2",
  csharp: "10.0.0",
  javascript: "18.15.0",
  };
  
  export const CODE_STARTER = {
    python: `def say(name):\n\tprint("hola, " + name + "!")\n\nsay("Austin")\n`,
    java: `public class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Ni Hao World");\n\t}\n}\n`,
    csharp:'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Ni Hao World in C#");\n\t\t}\n\t}\n}\n',
    javascript: `function say(name) {\n\tconsole.log("Sup, " + name + "!");\n}\n\nsay("sAustin");\n`,
  };
