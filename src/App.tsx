// import Layout from "./components/Layout.tsx";
import {BrowserRouter, Routes, Route} from "react-router";
import HomePage from "./pages/HomePage.tsx";
import NameChangerPage from "./pages/NameChangerPage.tsx";
import OnlineStatusPage from "./pages/OnlineStatusPage.tsx";
import UserPage from "./pages/UserPage.tsx";
import RouterLayout from "./components/RouterLayout.tsx";
import ExamplesPage from "./pages/ExamplesPage.tsx";
import RouterExamplesLayout from "./components/RouterExamplesLayout.tsx";
import AutoRedirectPage from "./pages/AutoRedirectPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
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
                    <Routes>
                        <Route element={<RouterLayout />}>

                            <Route index element={<HomePage />} />

                        </Route>

                        <Route path="examples" element={<RouterExamplesLayout />}>

                            <Route index element={<ExamplesPage />} />
                            <Route path="name-changer" element={<NameChangerPage />} />
                            <Route path="online-status" element={<OnlineStatusPage />} />
                            <Route path="auto-redirect" element={<AutoRedirectPage />}/>

                        </Route>

                        <Route path="users" element={<UserPage />} />
                        <Route path="users/:userId" element={<UserPage />} />
                        <Route path="*" element={<NotFoundPage />} />

                    </Routes>
            </BrowserRouter>




    </>
  )
}

export default App
