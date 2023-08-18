import { type ReportHandler } from 'web-vitals';

const reportWebVitals = async (onPerfEntry?: ReportHandler): Promise<void> => {
  if (onPerfEntry != null && onPerfEntry instanceof Function) {
    try {
      const webVitalsModule = await import('web-vitals');
      const { getCLS, getFID, getFCP, getLCP, getTTFB } = webVitalsModule;

      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    } catch (e) {}
  }
};

export default reportWebVitals;
