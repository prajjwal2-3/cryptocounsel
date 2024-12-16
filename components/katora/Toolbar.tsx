import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Highlighter,
  Image,
  Italic,
  Link,
  List,
  Quote,
  Soup,
  Underline,
  Unlink,
  Share,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
interface SmallButtonProps {
  isTypeActive?: boolean;
  icon: React.ReactNode;
  onClick: () => void;
}

const SmallButtons: React.FC<SmallButtonProps> = ({
  isTypeActive,
  icon,
  onClick,
}) => {
  return (
    <span
      className={`aspect-square p-2 hover:bg-gray-400 rounded-lg cursor-pointer ${
        isTypeActive ? "bg-gray-200" : ""
      }`}
      onClick={onClick}
    >
      {icon}
    </span>
  );
};

const Toolbar = ({ editor }: any) => {
  if (!editor) return null;

  const textAlignment = [
    {
      type: "left",
      icon: <AlignLeft size={18} />,
      onclick: () => editor.chain().focus().setTextAlign("left").run(),
    },
    {
      type: "center",
      icon: <AlignCenter size={18} />,
      onclick: () => editor.chain().focus().setTextAlign("center").run(),
    },
    {
      type: "right",
      icon: <AlignRight size={18} />,
      onclick: () => editor.chain().focus().setTextAlign("right").run(),
    },
  ];

  const basicFormatting = [
    {
      type: "bold",
      icon: <Bold size={18} />,
      onclick: () => editor.chain().focus().toggleBold().run(),
    },
    {
      type: "italic",
      icon: <Italic size={18} />,
      onclick: () => editor.chain().focus().toggleItalic().run(),
    },
    {
      type: "underline",
      icon: <Underline size={18} />,
      onclick: () => editor.chain().focus().toggleUnderline().run(),
    },
  ];

  const headings = [
    {
      type: "1",
      icon: <Heading1 size={18} />,
      onclick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
    },
    {
      type: "2",
      icon: <Heading2 size={18} />,
      onclick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
    },
    {
      type: "3",
      icon: <Heading3 size={18} />,
      onclick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
    },
  ];

  const seperating = [
    {
      type: "blockquote",
      icon: <Quote size={18} />,
      onclick: () => editor.commands.toggleBlockquote().run(),
    },
    {
      type: "highlight",
      icon: <Highlighter size={18} />,
      onclick: () => editor.commands.toggleHighlight().run(),
    },
    {
      type: "codeBlock",
      icon: <Code size={18} />,
      onclick: () => editor.chain().focus().toggleCodeBlock().run(),
    },
    {
      type: "bulletList",
      icon: <List size={18} />,
      onclick: () => editor.chain().focus().toggleBulletList().run(),
    },
  ];

  const setLink = () => {
    const link = prompt("give me link");
    editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: link })
      .run();
  };
  const unsetLink = () => {
    editor.chain().focus().unsetLink().run();
  };

  return (
    <div className="flex items-center   border-b py-8 mb-8 border-[#2c2c2c] bg-gray-50 sticky top-0 z-10">
      <div className="">
        <div className="bg-gray-200 border gap-3 mx-2 border-textlight p-1 flex rounded-lg">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="aspect-square px-1 hover:bg-gray-400 text-2xl font-light rounded-lg material-symbols-rounded cursor-pointer bg-gray-200">
                  share
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>Share this Document</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="aspect-square px-1 hover:bg-gray-400 text-2xl font-light rounded-lg material-symbols-rounded cursor-pointer bg-gray-200">
                  download
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>Download</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="aspect-square px-1 hover:bg-gray-400 text-2xl font-light rounded-lg material-symbols-rounded cursor-pointer bg-gray-200">
                  preview
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>Preview</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <div className="flex space-x-2 ml-auto">
        <div className="bg-gray-200 border border-textlight p-1 flex rounded-lg">
          {basicFormatting.map((elem, index) => (
            <SmallButtons
              isTypeActive={editor.isActive(elem.type)}
              icon={elem.icon}
              onClick={elem.onclick}
              key={index}
            />
          ))}
        </div>
        <div className="bg-gray-200 border border-textlight p-1 flex rounded-lg">
          {textAlignment.map((elem, index) => (
            <SmallButtons
              isTypeActive={editor.isActive({ textAlign: elem.type })}
              onClick={elem.onclick}
              icon={elem.icon}
              key={index}
            />
          ))}
        </div>
        <div className="bg-gray-200 border border-textlight p-1 flex rounded-lg">
          {headings.map((elem, index) => (
            <SmallButtons key={index} onClick={elem.onclick} icon={elem.icon} />
          ))}
        </div>
        <div className="bg-gray-200 border border-textlight p-1 flex rounded-lg">
          <span className="aspect-square p-2 hover:bg-gray-400 rounded-lg cursor-pointer">
            <Image size={18} />
          </span>
          {!editor.isActive("link") ? (
            <span
              className="aspect-square p-2 hover:bg-gray-400 rounded-lg cursor-pointer"
              onClick={setLink}
            >
              <Link size={18} />
            </span>
          ) : (
            <span
              className="aspect-square p-2 bg-[#252525] outline outline-1 outline-[#2c2c2c] hover:bg-[#202020] rounded-lg cursor-pointer text-blue-400"
              onClick={unsetLink}
            >
              <Unlink size={18} />
            </span>
          )}
        </div>
        <div className="bg-gray-200 border border-[#2c2c2c] p-1 flex rounded-lg">
          {seperating.map((elem, index) => (
            <SmallButtons
              isTypeActive={editor.isActive(elem.type)}
              key={index}
              onClick={elem.onclick}
              icon={elem.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
