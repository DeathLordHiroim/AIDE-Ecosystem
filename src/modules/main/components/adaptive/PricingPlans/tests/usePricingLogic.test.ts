import { renderHook, act } from '@testing-library/react';
import { usePricingLogic } from '../hooks/usePricingLogic';

describe('usePricingLogic', () => {
  it('should initialize with default values', () => {
    const { result } = renderHook(() => usePricingLogic());

    expect(result.current.isYearly).toBe(false);
    expect(result.current.selectedPlan).toBe('Basic');
    expect(typeof result.current.toggleBilling).toBe('function');
    expect(typeof result.current.getPrice).toBe('function');
    expect(typeof result.current.getPeriod).toBe('function');
  });

  it('should toggle billing period', () => {
    const { result } = renderHook(() => usePricingLogic());

    act(() => {
      result.current.toggleBilling();
    });

    expect(result.current.isYearly).toBe(true);

    act(() => {
      result.current.toggleBilling();
    });

    expect(result.current.isYearly).toBe(false);
  });

  it('should return correct price based on billing period', () => {
    const { result } = renderHook(() => usePricingLogic());
    const plan = result.current.plans[0];

    expect(result.current.getPrice(plan)).toBe('$29');

    act(() => {
      result.current.toggleBilling();
    });

    expect(result.current.getPrice(plan)).toBe('$278');
  });

  it('should return correct period based on billing period', () => {
    const { result } = renderHook(() => usePricingLogic());
    const plan = result.current.plans[0];

    expect(result.current.getPeriod(plan)).toBe('/month');

    act(() => {
      result.current.toggleBilling();
    });

    expect(result.current.getPeriod(plan)).toBe('/year');
  });
}); 