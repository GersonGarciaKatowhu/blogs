import { Helmet } from "react-helmet"
function Pages({children, title, dataPublication }) {
  return (
    <div>
      
        <Helmet>
            <title>{title}</title>
        </Helmet>
        <h1 className="no-margin center">{title}</h1>
        {children}
        <p className="data-publication center">{dataPublication}</p>
    </div>
  )
}

export default Pages