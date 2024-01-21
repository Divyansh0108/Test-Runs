import { useState } from "react";
import { EXAMPLES } from "../../data";
import Section from "../Section";
import TabButton from "../../TabButton";

export default function Examples() {
    const [clickedTopic, setClickedTopic] = useState(null);

    function handleClick(clickedButton) {
        setClickedTopic(clickedButton);
        console.log(clickedButton);
    }

    return (
        <Section title="Examples" id="examples">
            <h2></h2>
            <menu>
                <TabButton isClicked={clickedTopic === 'components'} onClick={() => handleClick('components')}>Components</TabButton>
                <TabButton isClicked={clickedTopic === 'jsx'} onClick={() => handleClick('jsx')}>JSX</TabButton>
                <TabButton isClicked={clickedTopic === 'props'} onClick={() => handleClick('props')}>Props</TabButton>
                <TabButton isClicked={clickedTopic === 'state'} onClick={() => handleClick('state')}>State</TabButton>
            </menu>
            {!clickedTopic && <p>Kindly select a topic.</p>}
            {clickedTopic && (
                <div id='tab-content'>
                    <h3>{EXAMPLES[clickedTopic].title}</h3>
                    <p>{EXAMPLES[clickedTopic].description}</p>
                    <pre>
                        <code>
                            {EXAMPLES[clickedTopic].code}
                        </code>
                    </pre>
                </div>
            )}
        </Section>
    );
}
