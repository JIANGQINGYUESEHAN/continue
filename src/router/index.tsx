/* eslint-disable @typescript-eslint/no-explicit-any */
import QueryString from "qs"
import { Suspense } from "react"
import { Routes, useLocation, useNavigate, useParams, Route } from "react-router-dom"
import routers from "./router"
import { Mask, DotLoading } from 'antd-mobile'
//这边可以进行路由验证的的判断和一些其他的操作
const Element = function (props: any) {
    //传入各种方法
    const { component: Component, meta } = props
    const { title = "App" } = meta || {}
    const params = useParams()
    const location = useLocation()
    const query = QueryString.parse(location.search.substring(1))
    const navigate = useNavigate()
    const obj = { query, params, location, navigate }
    document.title = title

    return <Component {...obj} />
}


//创建路由容器
export const RouterContent = function () {
    return <Suspense fallback={
        <Mask visible={true}>
            <DotLoading color="white" />
        </Mask>
    }>
        <Routes>
            {routers.map(item => {
                const { name, path } = item;
                return <Route key={name}
                    path={path}
                    element={
                        <Element {...item} />
                    } />;
            })}
        </Routes>
    </Suspense>;
};
//创建WithRouter
export const WithRouter = function (Component: any) {
    return function HOC(props: any) {
        const params = useParams()
        const location = useLocation()
        const query = QueryString.parse(location.search.substring(1))
        const obj = { query, params }
        return <Component {...props} {...obj} />
    }
}
