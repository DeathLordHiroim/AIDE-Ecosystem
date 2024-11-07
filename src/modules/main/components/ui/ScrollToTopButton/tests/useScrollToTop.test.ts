import { renderHook, act } from '@testing-library/react';
import { useScrollToTop } from '../hooks/useScrollToTop';
import * as useMediaQuery from '/home/runner/AIDE/new_src/modules/shared/hooks/useMediaQuery';

jest.mock('@/hooks/useMediaQuery', () => ({
  useMediaQuery: jest.fn()
}));

describe('useScrollToTop', () => {
  const mockWindow = {
    scrollY: 0,
    scrollTo: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn()
  };

  beforeEach(() => {
    global.window = mockWindow as any;
    (useMediaQuery.useMediaQuery as jest.Mock).mockReturnValue(false);
    mockWindow.scrollTo.mockClear();
    mockWindow.addEventListener.mockClear();
    mockWindow.removeEventListener.mockClear();
  });

  it('should initialize with default values', () => {
    const { result } = renderHook(() => useScrollToTop());

    expect(result.current.show).toBe(false);
    expect(result.current.isMobile).toBe(false);
    expect(typeof result.current.scrollToTop).toBe('function');
  });

  it('should add and remove scroll event listener', () => {
    renderHook(() => useScrollToTop());

    expect(window.addEventListener).toHaveBeenCalledWith('scroll', expect.any(Function));

    const cleanup = (window.addEventListener as jest.Mock).mock.calls[0][1];
    cleanup();

    expect(window.removeEventListener).toHaveBeenCalledWith('scroll', expect.any(Function));
  });

  it('should show button when scrolled past threshold', () => {
    mockWindow.scrollY = 400;
    const { result } = renderHook(() => useScrollToTop());

    act(() => {
      const scrollHandler = (window.addEventListener as jest.Mock).mock.calls[0][1];
      scrollHandler();
    });

    expect(result.current.show).toBe(true);
  });

  it('should scroll to top when scrollToTop is called', () => {
    const { result } = renderHook(() => useScrollToTop());

    act(() => {
      result.current.scrollToTop();
    });

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('should handle mobile state correctly', () => {
    (useMediaQuery.useMediaQuery as jest.Mock).mockReturnValue(true);
    const { result } = renderHook(() => useScrollToTop());

    expect(result.current.isMobile).toBe(true);
  });
}); 