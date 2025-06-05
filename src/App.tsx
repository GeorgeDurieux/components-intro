import Layout from "./components/Layout.tsx";
import {BrowserRouter, Routes, Route} from "react-router";
import HomePage from "./pages/HomePage.tsx";
import NameChangerPage from "./pages/NameChangerPage.tsx";
import OnlineStatusPage from "./pages/OnlineStatusPage.tsx";
// import ViteIntro from "./pages/ViteIntro.tsx";
// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import Counter from "./components/Counter.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import CounterWithReducer from "./components/CounterWithReducer.tsx";
// import OnlineStatus from "./components/OnlineStatus.tsx";

function App() {

    return (
    <>
            {/*<ClassComponent />*/}
            {/*<FunctionalComponent />*/}
            {/*<ArrowFunctionalComponent />*/}
            {/*<ArrowFunctionalComponentWithProps title={'Arrow Functional Component With Props'} />*/}
            {/*<ArrowFunctionalComponentWithPropsType*/}
            {/*    title={'Arrow Functional Component With Props'}*/}
            {/*    description={'(Using Type)'}*/}
            {/*/>*/}
            {/*<ClassComponentWithState />*/}
            {/*<FunctionalComponentWithState />*/}
            {/*<Counter />*/}
            {/*<CounterWithMoreStates  />*/}
            {/*<CounterAdvanced />*/}
            {/*<CounterWithCustomHook />*/}
            {/*<CounterWithReducer />*/}
            {/*<NameChanger />*/}
            {/*<ViteIntro />*/}
            {/*<OnlineStatus />*/}

            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="examples">
                            <Route path="name-changer" element={<NameChangerPage />} />
                            <Route path="online-status-changer" element={<OnlineStatusPage />} />
                        </Route>
                    </Routes>
                </Layout>
            </BrowserRouter>



    </>
  )
}

export default App
