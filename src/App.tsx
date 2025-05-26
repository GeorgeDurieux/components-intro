import ViteIntro from "./pages/ViteIntro.tsx";
import ClassComponent from "./components/ClassComponent.tsx";
import FunctionalComponent from "./components/FunctionalComponent.tsx";
import ArrowFunctionalComponent from "./components/ArrowFunctionComponent.tsx";
import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";

function App() {

  return (
    <>
        <ClassComponent />
        <FunctionalComponent />
        <ArrowFunctionalComponent />
        <ArrowFunctionalComponentWithProps title={'Arrow Functional Component With Props'} />
        <ArrowFunctionalComponentWithPropsType
            title={'Arrow Functional Component With Props'}
            description={'Using Type'} />
        <ViteIntro />
    </>
  )
}

export default App
