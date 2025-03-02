import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import PdfViewer from './PdfViewer';
import { document as doc } from 'components/DocumentPreview/__fixtures__/Art Effects.pdf';
import './PdfViewer.stories.scss';

const pageKnob = {
  label: 'Page',
  options: {
    range: true,
    min: 1,
    max: 8,
    step: 1
  },
  defaultValue: 1
};

const zoomKnob = {
  label: 'Zoom',
  options: {
    'Zoom out (50%)': '0.5',
    'Default (100%)': '1',
    'Zoom in (150%)': '1.5'
  },
  defaultValue: '1'
};

storiesOf('DocumentPreview/components/PdfViewer', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const page = number(pageKnob.label, pageKnob.defaultValue, pageKnob.options);

    const zoom = radios(zoomKnob.label, zoomKnob.options, zoomKnob.defaultValue);
    const scale = parseFloat(zoom);

    const setLoadingAction = action('setLoading');
    const setRenderedTextAction = action('setRenderedText');

    return (
      <div className="pdf-viewer-stories__gray-background">
        <PdfViewer
          file={atob(doc)}
          page={page}
          scale={scale}
          setLoading={setLoadingAction}
          setRenderedText={setRenderedTextAction}
        />
      </div>
    );
  });
