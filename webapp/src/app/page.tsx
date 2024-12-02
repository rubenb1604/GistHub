import Image from "next/image";
import Header from "@/app/Components/WebAssets/Header";
import Sidebar from "@/app/Components/WebAssets/Sidebar";
import Post from "@/app/Components/WebAssets/Post";

export default function Home() {

    const code = `<!DOCTYPE html>
        <html lang="de">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Test HTML</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; }
    </style>
</head>
    <body>
    <h1>Willkommen zu meiner Testseite</h1>
    <p>Dies ist ein einfacher HTML-Test.</p>
    <button onclick="alert('Hallo Welt!')">Klick mich!</button>
    <footer>
        <p>&copy; 2024 Mein Name</p>
    </footer>
    </body>
</html>
    `

  return (
    <div >
        <div className="fixed w-full">
            <Header />
        </div>
        <div className="flex">
            <div className="fixed">
                <Sidebar />
            </div>
            <main className="grid grid-cols-3 gap-6 mt-12 ml-72" id={"main"}>
                <Post title="Javascript Error out of Bound" code={code}
                      frameworks={["Javascript", "React", "NodeJS"]}
                      colors={{Javascript: "yellow", React: "blue", NodeJS: "green"}}
                      description={"I get this weird Javascript error when I try to run this code. Can somebody help?"}
                      id={1232131}/>
                <Post title="Javascript Error out of Bound" code={code}
                      frameworks={["Javascript", "React", "NodeJS"]}
                      colors={{Javascript: "yellow", React: "blue", NodeJS: "green"}}
                      description={"I get this weird Javascript error when I try to run this code. Can somebody help?"}
                      id={1232131}/>
                <Post title="Javascript Error out of Bound" code={code}
                      frameworks={["Javascript", "React", "NodeJS"]}
                      colors={{Javascript: "yellow", React: "blue", NodeJS: "green"}}
                      description={"I get this weird Javascript error when I try to run this code. Can somebody help?"}
                      id={1232131}/>
                <Post title="Javascript Error out of Bound" code={code}
                      frameworks={["Javascript", "React", "NodeJS"]}
                      colors={{Javascript: "yellow", React: "blue", NodeJS: "green"}}
                      description={"I get this weird Javascript error when I try to run this code. Can somebody help?"}
                      id={1232131}/>
                <Post title="Javascript Error out of Bound" code={code}
                      frameworks={["Javascript", "React", "NodeJS"]}
                      colors={{Javascript: "yellow", React: "blue", NodeJS: "green"}}
                      description={"I get this weird Javascript error when I try to run this code. Can somebody help?"}
                      id={1232131}/>
                <Post title="Javascript Error out of Bound" code={code}
                      frameworks={["Javascript", "React", "NodeJS"]}
                      colors={{Javascript: "yellow", React: "blue", NodeJS: "green"}}
                      description={"I get this weird Javascript error when I try to run this code. Can somebody help?"}
                      id={1232131}/>
                <Post title="Javascript Error out of Bound" code={code}
                      frameworks={["Javascript", "React", "NodeJS"]}
                      colors={{Javascript: "yellow", React: "blue", NodeJS: "green"}}
                      description={"I get this weird Javascript error when I try to run this code. Can somebody help?"}
                      id={1232131}/>
                <Post title="Javascript Error out of Bound" code={code}
                      frameworks={["Javascript", "React", "NodeJS"]}
                      colors={{Javascript: "yellow", React: "blue", NodeJS: "green"}}
                      description={"I get this weird Javascript error when I try to run this code. Can somebody help?"}
                      id={1232131}/>
                <Post title="Javascript Error out of Bound" code={code}
                      frameworks={["Javascript", "React", "NodeJS"]}
                      colors={{Javascript: "yellow", React: "blue", NodeJS: "green"}}
                      description={"I get this weird Javascript error when I try to run this code. Can somebody help?"}
                      id={1232131}/>
                <Post title="Javascript Error out of Bound" code={code}
                      frameworks={["Javascript", "React", "NodeJS"]}
                      colors={{Javascript: "yellow", React: "blue", NodeJS: "green"}}
                      description={"I get this weird Javascript error when I try to run this code. Can somebody help?"}
                      id={1232131}/>
                <Post title="Javascript Error out of Bound" code={code}
                      frameworks={["Javascript", "React", "NodeJS"]}
                      colors={{Javascript: "yellow", React: "blue", NodeJS: "green"}}
                      description={"I get this weird Javascript error when I try to run this code. Can somebody help?"}
                      id={1232131}/>
                <Post title="Javascript Error out of Bound" code={code}
                      frameworks={["Javascript", "React", "NodeJS"]}
                      colors={{Javascript: "yellow", React: "blue", NodeJS: "green"}}
                      description={"I get this weird Javascript error when I try to run this code. Can somebody help?"}
                      id={1232131}/>
            </main>
        </div>
    </div>
  );
}
