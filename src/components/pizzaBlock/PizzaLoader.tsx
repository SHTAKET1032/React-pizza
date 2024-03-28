import React from "react"
import ContentLoader from "react-content-loader"

const PizzaLoader:React.FC = (props) => (
        <ContentLoader
            speed={1}
            width={280}
            height={470}
            viewBox="0 0 240 470"
            backgroundColor="#000000"
            foregroundColor="#db0a0a"
            {...props}>
            <circle cx="120" cy="120" r="120" />
            <rect x="0" y="275" rx="10" ry="10" width="240" height="20" />
            <rect x="0" y="315" rx="10" ry="10" width="240" height="87" />
            <rect x="0" y="425" rx="10" ry="10" width="90" height="35" />
            <rect x="98" y="415" rx="30" ry="30" width="140" height="51" />
        </ContentLoader>
)

export default PizzaLoader
