import Layout from "@/components/Layout";
import { useState } from "react";

const DEFAULT_DATA =  {
    title : "",
    description : "",
    link:"",
    priority : "2",
    timeToFinish : 60
}

const ResourceCreate = ()=>{
    const [form,setForm] =useState(DEFAULT_DATA);

    const submitForm = ()=>{
        fetch("/api/resources",{
            body: JSON.stringify(form),
            headers : {"content-type" : "application/json"},
            method :"POST",
        })
    }

    const resetForm =()=> setForm(DEFAULT_DATA);

    const handleChange =(e)=>{
        setForm({
            ...form,
            [e.target.name] : e.target.value})
    }
    return (
      <Layout>
        <div className="container">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <div className="resource-form">
                <h1 className="title">Add New Resource</h1>
                <form>
                  <div className="field">
                    <label className="label">Title</label>
                    <div className="control">
                      <input
                        value={form.title}
                        onChange={handleChange}
                        name="title"
                        className="input"
                        type="text"
                        placeholder="Add title"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Description</label>
                    <div className="control">
                      <textarea
                        value={form.description}
                        onChange={handleChange}
                        name="description"
                        class="textarea"
                        placeholder="Add description"
                      ></textarea>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Link</label>
                    <div className="control">
                      <input
                        value={form.link}
                        onChange={handleChange}
                        name="link"
                        className="input"
                        type="text"
                        placeholder="http://example.com"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Priority</label>
                    <div className="control">
                      <div className="select">
                        <select
                          value={form.priority}
                          onChange={handleChange}
                          name="priority"
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Time to finish</label>
                    <div className="control">
                      <input
                        value={form.timeToFinish}
                        onChange={handleChange}
                        name="timeToFinish"
                        className="input"
                        type="number"
                        placeholder="60"
                      />
                    </div>
                    <p className="help">Time is in minutes</p>
                  </div>
                  <div className="field is-grouped">
                    <div className="control">
                      <button
                        className="button is-link"
                        type="button"
                        onClick={submitForm}
                      >
                        Submit
                      </button>
                    </div>
                    <div className="control">
                      <button className="button is-link is-light" type="button" onClick={resetForm}>
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
}

export default ResourceCreate;