import {Fragment, useState} from 'react';

import { EXAMPLES } from '../data.js';
import Section from './Section.jsx';
import TabButton from './TabButton.jsx';
import Tabs from './Tabs.jsx';

export default function Examples() {
    // hooks MUST be called from top level of the component
    const [selectedTopic, setSelectedTopic] = useState();
    
    // event handler for button click
    function handleSelect(selectedButton){
        setSelectedTopic(selectedButton);
        console.log(selectedTopic);
    }

    // tabContent setup
    let tabContent = <p>Please select a topic</p>;
    if (selectedTopic) {
        tabContent = (
        <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
        </div>
        );
    }

    return (
        <Section title="Examples" id="examples">
            <Tabs
                buttons={
                <Fragment>
                    <TabButton isSelected={selectedTopic === 'components'}
                    onClick={()=>handleSelect('components')}>
                        Components
                    </TabButton>
                    <TabButton isSelected={selectedTopic === 'jsx'}
                    onClick={()=>handleSelect('jsx')}>
                        JSX
                    </TabButton>
                    <TabButton isSelected={selectedTopic === 'props'}
                    onClick={()=>handleSelect('props')}>
                        PROPS
                    </TabButton>
                    <TabButton isSelected={selectedTopic === 'state'}
                    onClick={()=>handleSelect('state')}>
                        State
                    </TabButton>
                </Fragment>
            }>
                {tabContent}
            </Tabs>
        </Section>
    );
}