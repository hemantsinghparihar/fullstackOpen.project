import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
//import Content from "../../services/collabService";
import contentData from "../../services/collabService";
import Form from "./Form";

function SingleContent(props) {
  const content=props.content;
  const item=props.item
  return (
    <div className="tab-pane active" role="tabpanel">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-7">
          <div className="Collaborate-content">
            <h2>
              {content.data ? content.data[item].attributes.heading : "loading"}
            </h2>
            <p className="cardDesc">
              {content.data
                ? content.data[item].attributes.boldText[0].children[0].text
                : "loading"}
            </p>
            <p className="small-desc">
              {content.data
                ? content.data[item].attributes.smallText[0].children[0].text
                : "loading"}
            </p>
            <p className="normal-Desc">
              {content.data
                ? content.data[item].attributes.normalText[0].children[0].text
                : "loading"}
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-5">
          <Form action={"#"} />
        </div>
      </div>
    </div>
  );
}

function CollabContent(props) {
  const activeLink = props.activeLink;
  const [content, setContent] = useState({});

  useEffect(() => {
    contentData.getCollabContent().then((res) => {
      setContent(res);
    });
  }, []);

  //  const form=useForm()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      {activeLink === 1 && (
        // id="Suppliers"
        <SingleContent content={content} item={2}/>
      )}

      {activeLink === 2 && (
        <SingleContent content={content} item={0}/>
      )}

      {activeLink === 3 && (
        //id="SuperStockists"
        <SingleContent content={content} item={1}/>
      )}
    </div>
  );
}

export default CollabContent;
