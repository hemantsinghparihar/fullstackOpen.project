import React from 'react'
import '../../App.css'

function PageTop(props) {
    const pageTitle=props.pageTitle
  return (
    <section className="BreadCrumssec">
        <div className="container">
          <div className="bredContent">
            <h1>{pageTitle}</h1>
          </div>
        </div>
      </section>
  )
}

export default PageTop
