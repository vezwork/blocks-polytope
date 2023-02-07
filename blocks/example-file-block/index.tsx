import { FileBlockProps, getLanguageFromFilename } from "@githubnext/blocks";
import { Button, Box } from "@primer/react";
import "./index.css";

// @ts-ignore
import { MyEditorElement, builder } from "../../Polytope/custom.js";
import { useEffect } from "react";

export default function (props: FileBlockProps) {
  const { context, content, metadata, onUpdateContent } = props;
  const language = Boolean(context.path)
    ? getLanguageFromFilename(context.path)
    : "N/A";

  useEffect(() => {
    const dummyParentEl = document.createElement("div");
    const editorEl = new MyEditorElement({
      code: builder(content).output,
      builder,
      parentEditor: dummyParentEl,
    });
    document.getElementById("editor")?.append(editorEl);
    dummyParentEl.addEventListener("childEditorUpdate", () => {
      const out = (
        document.querySelector("my-text-editor") as any
      )?.getOutput();
      onUpdateContent(out);
    });
  }, []);

  return (
    <Box
      display="grid"
      gridTemplateColumns={`80% 20%`}
      gridGap={2}
      height="100%"
      width="100%"
      overflow="hidden"
      p={2}
      position="relative"
    >
      <Box
        borderColor="border.default"
        borderWidth={1}
        borderStyle="solid"
        overflow="hidden"
      >
        <Box
          bg="canvas.subtle"
          p={3}
          borderBottomWidth={1}
          borderBottomStyle="solid"
          borderColor="border.default"
        >
          <Button>
            File: {context.path} {language}
          </Button>
        </Box>
        <div style={{ fontSize: "25px" }} id="editor">
          {/* <p>Metadata example: this button has been clicked:</p>
          <Button onClick={() => onUpdateContent(content + "hi!")}>
            {metadata.number || 0} times
          </Button> */}
        </div>
      </Box>
      <Box
        borderColor="border.default"
        borderWidth={1}
        borderStyle="solid"
        overflow="hidden"
      >
        <Box
          bg="canvas.subtle"
          p={3}
          borderBottomWidth={1}
          borderBottomStyle="solid"
          borderColor="border.default"
        >
          <Button
            onClick={() => {
              const out = (
                document.querySelector("my-text-editor") as any
              )?.getOutput();
              // evalModule(out);
              // document.getElementById("polytope-out")?.innerHTML = "";

              const Polytope = {} as any;
              Polytope.out = (value: any) => {
                document.getElementById("polytope-out")?.append(
                  new MyEditorElement({
                    code: builder("(" + JSON.stringify(value) + ")").output,
                    builder,
                  })
                );
              };
              eval(out);
            }}
          >
            Run
          </Button>
        </Box>
        <div id="polytope-out" style={{ fontSize: "25px" }}></div>
      </Box>
    </Box>
  );
}
