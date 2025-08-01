import { ExpressIcon, HtmlIcon, JsIcon, CssIcon, ReactIcon, 
  NodeIcon, ScssIcon, ViteIcon, GitIcon, MongoIcon, InsomniaIcon, NpmIcon } from './ReExport';

function TechIcon({ name }) {
  const icons = {
    express: <ExpressIcon />,
    html: <HtmlIcon />,
    js: <JsIcon />,
    css: <CssIcon />,
    react: <ReactIcon />,
    node: <NodeIcon />,
    scss: <ScssIcon />,
    vite: <ViteIcon />,
    git: <GitIcon />,
    mongo: <MongoIcon />,
    insomnia: <InsomniaIcon />,
    npm: <NpmIcon />,
  };

  if (!name) return null;

  const key = name.toLowerCase();

  return icons[key];
}

export default TechIcon