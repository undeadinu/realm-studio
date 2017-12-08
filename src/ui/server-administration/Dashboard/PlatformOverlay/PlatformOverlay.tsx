import * as React from 'react';

import { getPlatformLanguage, getPlatformTitle, Platform } from '..';

interface IPlatformOverlayProps {
  onClose: () => void;
  platform: Platform;
}

export const PlatformOverlay = ({
  onClose,
  platform,
}: IPlatformOverlayProps) => (
  <section className="Dashboard__PlatformOverlay">
    <i
      className="Dashboard__PlatformOverlay__Close fa fa-close"
      onClick={onClose}
    />
    <h1>{getPlatformTitle(platform)}</h1>
  </section>
);
