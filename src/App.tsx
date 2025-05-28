import ViteIntro from "./pages/ViteIntro.tsx";
import ClassComponent from "./components/ClassComponent.tsx";
import FunctionalComponent from "./components/FunctionalComponent.tsx";
import ArrowFunctionalComponent from "./components/ArrowFunctionComponent.tsx";
import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
import Layout from "./components/Layout.tsx";
import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
import Counter from "./components/Counter.tsx";
import NameChanger from "./components/NameChanger.tsx";
import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
import CounterAdvanced from "./components/CounterAdvanced.tsx";
import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";

function App() {

  return (
    <>
        <Layout>
            <ClassComponent />
            <FunctionalComponent />
            <ArrowFunctionalComponent />
            <ArrowFunctionalComponentWithProps title={'Arrow Functional Component With Props'} />
            <ArrowFunctionalComponentWithPropsType
                title={'Arrow Functional Component With Props'}
                description={'(Using Type)'}
            />
            <ClassComponentWithState />
            <FunctionalComponentWithState />
            <Counter />
            <CounterWithMoreStates  />
            <CounterAdvanced />
            <CounterWithCustomHook />
            <NameChanger />
            <ViteIntro />
        </Layout>
    </>
  )
}

export default App
