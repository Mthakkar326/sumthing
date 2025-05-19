import { evaluate } from 'mathjs';

/**
 * Validates a math expression and checks if it matches the target number
 * @param {string} expression - The math expression to validate
 * @param {number[]} numberCards - Array of 5 numbers that must be used
 * @param {number} targetNumber - The target number to match
 * @returns {{ success: boolean, time?: string, error?: string }} Result object
 */
export const validateExpression = (expression, numberCards, targetNumber) => {
  // Normalize the expression
  const normalizedExpression = expression
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/\s+/g, '')
    .trim();

  // Step 1: Try evaluating the expression
  let result;
  try {
    result = evaluate(normalizedExpression);
  } catch {
    return {
      success: false,
      error: 'Please use a valid equation',
    };
  }

  // Step 2: Extract numbers and check how many were used
  const usedNumbers = normalizedExpression.match(/\d+/g)?.map(Number) || [];

  if (usedNumbers.length !== 5) {
    return {
      success: false,
      error: 'Please use all 5 cards',
    };
  }

  // Step 3: Validate usage against the number cards
  const usedCounts = new Map();
  for (const num of usedNumbers) {
    usedCounts.set(num, (usedCounts.get(num) || 0) + 1);
  }

  const cardCounts = new Map();
  for (const num of numberCards) {
    cardCounts.set(num, (cardCounts.get(num) || 0) + 1);
  }

  for (const [num, count] of usedCounts) {
    if (!cardCounts.has(num)) {
      return {
        success: false,
        error: 'You can only use the provided number cards',
      };
    }
    if (count > cardCounts.get(num)) {
      return {
        success: false,
        error: 'You can only use each number once',
      };
    }
  }

  // Step 4: Final correctness check
  if (result === targetNumber) {
    return {
      success: true,
      time: '00:00',
    };
  } else {
    return {
      success: false,
      error: 'Incorrect, please try again',
    };
  }
};