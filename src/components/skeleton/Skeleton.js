import ContentLoader from "react-content-loader"


export const Skeleton = ({width,height,bg,radius = 8}) => (
    <ContentLoader
        speed={2}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        backgroundColor={bg}
        foregroundColor="#fff"
    >
        <rect x="0" y="3" rx={radius} ry={radius} width={width} height={height} />
    </ContentLoader>
)