// Question bank for MATH 2411 midterm quiz
// t = "mc" (multiple choice, a = index 0-3) or "tf" (true/false, a = "T" or "F")
// c = chapter 1, 2 or 3

window.QUESTIONS = [

  // ===================== CHAPTER 1 — MC =====================
  { id: "mc1_1", c: 1, t: "mc",
    q: "For the data 2, 4, 6, 8, 10, what is the sample mean?",
    o: ["5", "6", "7", "6.5"], a: 1,
    e: "Mean = (2+4+6+8+10)/5 = 30/5 = 6." },

  { id: "mc1_2", c: 1, t: "mc",
    q: "Data (sorted): 2, 2, 4, 5, 5, 5, 8, 9, 9, 9, 12 (n=11). What is Q1 using the np+0.5 rule?",
    o: ["4", "4.5", "5", "2"], a: 1,
    e: "np + 0.5 = 11(0.25) + 0.5 = 3.25 → average of 3rd and 4th values = (4+5)/2 = 4.5." },

  { id: "mc1_3", c: 1, t: "mc",
    q: "Which measure of center is MOST robust to outliers?",
    o: ["Mean", "Trimmed mean", "Median", "Range"], a: 2,
    e: "The median is robust: it is not affected by extreme values. The trimmed mean is in between." },

  { id: "mc1_4", c: 1, t: "mc",
    q: "If Var(X) = 4 for a data set and every value is transformed to Y = 3X + 7, what is Var(Y)?",
    o: ["12", "19", "36", "25"], a: 2,
    e: "Var(aX + b) = a²·Var(X) = 9 · 4 = 36. The shift +7 does not affect spread." },

  { id: "mc1_5", c: 1, t: "mc",
    q: "A distribution is right-skewed (long right tail). Which is TRUE?",
    o: ["mean < median", "mean > median", "mean = median", "mean = mode"], a: 1,
    e: "In a right-skewed distribution, the few very large values pull the mean above the median." },

  { id: "mc1_6", c: 1, t: "mc",
    q: "Data with Q1=10, Q3=22. By the 1.5·IQR rule, is x=40 an outlier?",
    o: ["No, exactly on the fence is not an outlier", "Yes, 40 ≥ 22 + 1.5·12 = 40", "Yes, 40 is above Q3", "Cannot tell without the median"], a: 1,
    e: "IQR = 12, upper fence = 22 + 1.5·12 = 40. Since 40 ≥ 40, it IS flagged as an outlier (the rule uses ≥, not strict)." },

  { id: "mc1_7", c: 1, t: "mc",
    q: "What is the sum of the deviations xᵢ − x̄ for any data set?",
    o: ["Always positive", "Always 0", "Equal to the variance", "Depends on n"], a: 1,
    e: "The deviations always sum to zero — that's why variance has n−1 degrees of freedom." },

  { id: "mc1_8", c: 1, t: "mc",
    q: "Which variable is QUANTITATIVE DISCRETE?",
    o: ["Favorite color", "Height in cm", "Number of children in a family", "Satisfaction rating 1–5"], a: 2,
    e: "Number of children comes from counting (0, 1, 2, ...) — discrete. Satisfaction 1–5 is ordinal categorical even though coded as numbers." },

  { id: "mc1_9", c: 1, t: "mc",
    q: "You compute s² using the formula Σ(xᵢ−x̄)²/n (dividing by n). What does the course prefer?",
    o: ["Divide by n (your formula is correct)", "Divide by n−1", "Divide by n+1", "Divide by n−2"], a: 1,
    e: "This course uses s² = Σ(xᵢ−x̄)² / (n−1), with n−1 degrees of freedom." },

  // ===================== CHAPTER 2 — MC =====================
  { id: "mc2_1", c: 2, t: "mc",
    q: "Two fair dice are rolled. P(sum = 7) = ?",
    o: ["1/36", "1/9", "1/6", "7/36"], a: 2,
    e: "The sum 7 can occur as (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) — 6 of 36 outcomes = 1/6." },

  { id: "mc2_2", c: 2, t: "mc",
    q: "From a 52-card deck, P(Jack OR red card) = ?",
    o: ["30/52", "28/52", "32/52", "26/52"], a: 1,
    e: "P(J) + P(red) − P(J ∩ red) = 4/52 + 26/52 − 2/52 = 28/52. The two red jacks are subtracted once." },

  { id: "mc2_3", c: 2, t: "mc",
    q: "How many ways to choose a committee of 4 from 10 people?",
    o: ["40", "210", "5040", "10000"], a: 1,
    e: "Order does not matter → combination: C(10,4) = 10!/(4!·6!) = 210." },

  { id: "mc2_4", c: 2, t: "mc",
    q: "How many distinct arrangements of the letters in STATISTICS?",
    o: ["3,628,800", "50,400", "100,800", "120,960"], a: 1,
    e: "10 letters with S×3, T×3, I×2, A×1, C×1 → 10!/(3!·3!·2!) = 50,400." },

  { id: "mc2_5", c: 2, t: "mc",
    q: "Birthday problem: approximate P(at least two share) in a room of 23?",
    o: ["About 0.06", "About 0.23", "About 0.51", "About 0.95"], a: 2,
    e: "Classic answer — the probability exceeds 50% starting at n = 23 (actual ≈ 0.507)." },

  { id: "mc2_6", c: 2, t: "mc",
    q: "P(A) = 0.4, P(B) = 0.5, P(A ∩ B) = 0.2. Are A and B independent?",
    o: ["Yes, because P(A)·P(B) = 0.2 = P(A∩B)", "No, because P(A) ≠ P(B)", "No, because they overlap", "Cannot tell"], a: 0,
    e: "Independence means P(A∩B) = P(A)·P(B) = 0.4·0.5 = 0.2 ✓. They are independent." },

  { id: "mc2_7", c: 2, t: "mc",
    q: "Three machines make 30%, 45%, 25% of items with defect rates 2%, 3%, 2%. P(a random item is defective)?",
    o: ["0.0233", "0.0245", "0.0333", "0.0750"], a: 1,
    e: "Law of total probability: 0.30·0.02 + 0.45·0.03 + 0.25·0.02 = 0.006 + 0.0135 + 0.005 = 0.0245." },

  { id: "mc2_8", c: 2, t: "mc",
    q: "Continuing: a defective item is observed. P(it came from machine II)?",
    o: ["0.204", "0.333", "0.450", "0.551"], a: 3,
    e: "Bayes: P(II | def) = (0.45·0.03) / 0.0245 = 0.0135/0.0245 ≈ 0.551." },

  { id: "mc2_9", c: 2, t: "mc",
    q: "A bag has 5 red and 3 green balls. Draw 3 without replacement. P(all red)?",
    o: ["5/56 ≈ 0.089", "10/56 ≈ 0.179", "15/56 ≈ 0.268", "125/512 ≈ 0.244"], a: 1,
    e: "C(5,3) / C(8,3) = 10/56 ≈ 0.179. Equivalently 5/8 · 4/7 · 3/6 = 60/336 = 10/56." },

  { id: "mc2_10", c: 2, t: "mc",
    q: "A disease has prevalence 1%. A test gives true-positive rate 0.90 and false-positive rate 0.05. If you test positive, P(disease)?",
    o: ["0.009", "0.154", "0.500", "0.900"], a: 1,
    e: "Bayes: (0.90·0.01)/(0.90·0.01 + 0.05·0.99) = 0.009/0.0585 ≈ 0.154. The base-rate fallacy strikes again." },

  { id: "mc2_11", c: 2, t: "mc",
    q: "How many ways to arrange 7 students into 1 triple and 2 double rooms?",
    o: ["42", "105", "210", "5040"], a: 2,
    e: "Partition into groups: 7!/(3!·2!·2!) = 5040/24 = 210." },

  { id: "mc2_12", c: 2, t: "mc",
    q: "A box has 20 fuses, 5 defective. Three removed without replacement. P(all three defective)?",
    o: ["1/64", "1/114", "1/228", "5/1024"], a: 1,
    e: "(5/20)·(4/19)·(3/18) = 60/6840 = 1/114. Or C(5,3)/C(20,3) = 10/1140 = 1/114." },

  // ===================== CHAPTER 3 — MC =====================
  { id: "mc3_1", c: 3, t: "mc",
    q: "p(x) = c·x for x = 1, 2, 3, 4. Find c.",
    o: ["1/4", "1/8", "1/10", "1/16"], a: 2,
    e: "Must sum to 1: c(1+2+3+4) = 10c = 1 ⇒ c = 1/10." },

  { id: "mc3_2", c: 3, t: "mc",
    q: "For one fair die, E(X) = ?",
    o: ["3", "3.5", "4", "4.5"], a: 1,
    e: "E(X) = (1+2+3+4+5+6)/6 = 21/6 = 3.5. Note: the mean need not be a possible value." },

  { id: "mc3_3", c: 3, t: "mc",
    q: "Toss a fair coin 3 times, X = number of heads. Var(X) = ?",
    o: ["0.5", "0.75", "1.5", "2.25"], a: 1,
    e: "X = I₁ + I₂ + I₃ (independent indicators). Var(X) = 3·(1/2)(1/2) = 0.75." },

  { id: "mc3_4", c: 3, t: "mc",
    q: "If E(X) = 5 and Var(X) = 4, what is Var(2X − 3)?",
    o: ["5", "8", "13", "16"], a: 3,
    e: "Var(aX + b) = a²·Var(X) = 4·4 = 16. The shift −3 drops out." },

  { id: "mc3_5", c: 3, t: "mc",
    q: "If E(X) = 5 and Var(X) = 4, what is E(X²)?",
    o: ["25", "29", "20", "9"], a: 1,
    e: "Var(X) = E(X²) − [E(X)]² ⇒ E(X²) = Var(X) + μ² = 4 + 25 = 29." },

  { id: "mc3_6", c: 3, t: "mc",
    q: "X has pmf p(1)=0.3, p(2)=0.2, p(3)=0.5. Find P(1 < X ≤ 3).",
    o: ["0.5", "0.7", "0.2", "1.0"], a: 1,
    e: "P(1 < X ≤ 3) = p(2) + p(3) = 0.2 + 0.5 = 0.7. Equivalently F(3) − F(1) = 1 − 0.3." },

  { id: "mc3_7", c: 3, t: "mc",
    q: "Same pmf. Find P(1 < X < 3).",
    o: ["0.5", "0.7", "0.2", "0.3"], a: 2,
    e: "Only x = 2 satisfies 1 < X < 3, so answer is p(2) = 0.2. Watch < vs ≤!" },

  { id: "mc3_8", c: 3, t: "mc",
    q: "Box of 10 items, 3 defective. Choose 3 without replacement. E(number defective)?",
    o: ["0.3", "0.9", "1.0", "1.5"], a: 1,
    e: "Hypergeometric. Expected proportion matches population proportion: n·(K/N) = 3·(3/10) = 0.9." },

  { id: "mc3_9", c: 3, t: "mc",
    q: "X and Y are independent, Var(X)=4, Var(Y)=9. Var(X − Y) = ?",
    o: ["−5", "5", "13", "97"], a: 2,
    e: "Var(X − Y) = Var(X) + Var(Y) = 4 + 9 = 13 (plus, not minus, because Var(−Y) = Var(Y))." },

  { id: "mc3_10", c: 3, t: "mc",
    q: "X and Y independent, E(X)=3, Var(X)=2, E(Y)=−1, Var(Y)=5. W = 3X − 2Y + 4. Find Var(W).",
    o: ["18", "20", "38", "4"], a: 2,
    e: "Var(W) = 3²·Var(X) + (−2)²·Var(Y) = 9·2 + 4·5 = 18 + 20 = 38. The constant 4 drops out." },

  { id: "mc3_11", c: 3, t: "mc",
    q: "A fair coin is tossed. Let X = 1 if head, else 0. What is Var(X)?",
    o: ["0", "0.25", "0.5", "1"], a: 1,
    e: "Indicator variable: Var(I_A) = P(A)(1−P(A)) = 0.5·0.5 = 0.25." },

  { id: "mc3_12", c: 3, t: "mc",
    q: "X has cdf F(x) = 0 for x<1; 0.4 for 1≤x<3; 1 for x≥3. Find p(3).",
    o: ["0.4", "0.6", "1.0", "0"], a: 1,
    e: "Jumps give the pmf. p(3) = F(3) − F(3⁻) = 1 − 0.4 = 0.6. Also p(1) = 0.4." },

  // ===================== CHAPTER 3.3-3.5 — MC =====================
  { id: "mc3_13", c: 3, t: "mc",
    q: "X is continuous with pdf f(x) = cx² for 0 ≤ x ≤ 1. Find c.",
    o: ["1", "2", "3", "6"], a: 2,
    e: "Normalize: ∫₀¹ cx² dx = c/3 = 1, so c = 3." },

  { id: "mc3_14", c: 3, t: "mc",
    q: "X is continuous with pdf f(x) = 2x for 0 ≤ x ≤ 1. Find P(0.3 < X ≤ 0.7).",
    o: ["0.20", "0.40", "0.49", "0.70"], a: 1,
    e: "F(x) = x². P = F(0.7) − F(0.3) = 0.49 − 0.09 = 0.40." },

  { id: "mc3_15", c: 3, t: "mc",
    q: "Binomial with n = 20, p = 0.3. Find E(X) and Var(X).",
    o: ["E = 6, Var = 4.2", "E = 6, Var = 1.8", "E = 3, Var = 2.1", "E = 20, Var = 6"], a: 0,
    e: "Binomial: E = np = 6, Var = np(1−p) = 20·0.3·0.7 = 4.2." },

  { id: "mc3_16", c: 3, t: "mc",
    q: "Poisson(λ=4). Find P(X = 2).",
    o: ["0.0183", "0.0733", "0.1465", "0.1954"], a: 2,
    e: "P(X=2) = e⁻⁴·4²/2! = e⁻⁴·8 = 0.1465." },

  { id: "mc3_17", c: 3, t: "mc",
    q: "For a Poisson distribution, which statement is TRUE?",
    o: ["Mean = Variance", "Mean > Variance always", "The MGF is a polynomial", "The pmf is defined only for even k"], a: 0,
    e: "Mean = Variance = λ. This is the Poisson fingerprint." },

  { id: "mc3_18", c: 3, t: "mc",
    q: "X ~ N(100, 25) (so μ=100, σ=5). Find P(X ≤ 110) using Φ(2) ≈ 0.9772.",
    o: ["0.0228", "0.5000", "0.9772", "0.8413"], a: 2,
    e: "Z = (110−100)/5 = 2. P(X ≤ 110) = Φ(2) = 0.9772." },

  { id: "mc3_19", c: 3, t: "mc",
    q: "Exponential(θ = 2). Find P(X > 3).",
    o: ["e⁻¹·⁵ ≈ 0.223", "e⁻³ ≈ 0.050", "e⁻⁶ ≈ 0.002", "1 − e⁻¹·⁵ ≈ 0.777"], a: 0,
    e: "P(X > 3) = e⁻³/² ≈ 0.223. (Using the parameterization f(x) = (1/θ)e^(−x/θ) with mean θ.)" },

  { id: "mc3_20", c: 3, t: "mc",
    q: "A distribution has μ = 50 and σ = 10. Use Chebyshev to give a lower bound on P(30 < X < 70).",
    o: ["≥ 0.50", "≥ 0.75", "≥ 0.89", "= 0.95"], a: 1,
    e: "The interval |X−50| < 20 = 2σ, so k = 2. Chebyshev: P ≥ 1 − 1/k² = 1 − 1/4 = 0.75." },

  { id: "mc3_21", c: 3, t: "mc",
    q: "The MGF of X is M(t) = e^(5t + 2t²). What distribution does X have?",
    o: ["Normal(5, 2)", "Normal(5, 4)", "Normal(10, 2)", "Poisson(5)"], a: 1,
    e: "The MGF of N(μ, σ²) is exp(μt + σ²t²/2). Matching: μ = 5 and σ²/2 = 2, so σ² = 4. X ~ N(5, 4)." },

  { id: "mc3_22", c: 3, t: "mc",
    q: "M_X(t) = (0.4 + 0.6e^t)^10. What are E(X) and Var(X)?",
    o: ["E = 6, Var = 2.4", "E = 4, Var = 2.4", "E = 6, Var = 3.6", "E = 10, Var = 6"], a: 0,
    e: "This is Binomial(n=10, p=0.6). E = np = 6, Var = np(1−p) = 10·0.6·0.4 = 2.4." },

  { id: "mc3_23", c: 3, t: "mc",
    q: "X ~ Uniform[2, 8]. Find E(X) and Var(X).",
    o: ["E = 5, Var = 1", "E = 5, Var = 3", "E = 5, Var = 36", "E = 4, Var = 6"], a: 1,
    e: "Uniform: E = (a+b)/2 = 5, Var = (b−a)²/12 = 36/12 = 3." }

];

window.TF_QUESTIONS = [

  // ===================== CHAPTER 1 — T/F =====================
  { id: "tf1_1", c: 1, t: "tf",
    q: "The mean is less sensitive to outliers than the median.",
    a: "F",
    e: "FALSE. The median is robust; the mean is pulled by extreme values. Example: incomes are right-skewed, so the median is reported." },

  { id: "tf1_2", c: 1, t: "tf",
    q: "Averaging a categorical variable coded as numbers (Yes=1, No=0) is a valid summary.",
    a: "F",
    e: "FALSE. The numbers are only labels; averaging them is meaningless." },

  { id: "tf1_3", c: 1, t: "tf",
    q: "In this course, sample variance uses the denominator n−1.",
    a: "T",
    e: "TRUE. s² = Σ(xᵢ−x̄)² / (n−1), with n−1 degrees of freedom." },

  { id: "tf1_4", c: 1, t: "tf",
    q: "If every value is multiplied by 2, the standard deviation also doubles.",
    a: "T",
    e: "TRUE. s_y = |a|·s_x. For a = 2, the sd doubles. (The variance quadruples.)" },

  { id: "tf1_5", c: 1, t: "tf",
    q: "A point exactly on the fence Q1 − 1.5·IQR is NOT an outlier.",
    a: "F",
    e: "FALSE. The rule uses ≤ and ≥: x ≤ Q1 − 1.5·IQR is flagged. On the fence IS an outlier." },

  { id: "tf1_6", c: 1, t: "tf",
    q: "R's quantile() always returns the same quartiles as the course's np+0.5 rule.",
    a: "F",
    e: "FALSE. R uses a different convention and may give different values. On the exam, use np+0.5." },

  { id: "tf1_7", c: 1, t: "tf",
    q: "A student ID number is a quantitative variable.",
    a: "F",
    e: "FALSE. It is a nominal identifier, not a quantity. Averaging student IDs is meaningless." },

  { id: "tf1_8", c: 1, t: "tf",
    q: "The sum of deviations xᵢ − x̄ is always zero.",
    a: "T",
    e: "TRUE. This is why variance has n−1 degrees of freedom." },

  // ===================== CHAPTER 2 — T/F =====================
  { id: "tf2_1", c: 2, t: "tf",
    q: "P(E) ≤ 1 is one of Kolmogorov's three axioms.",
    a: "F",
    e: "FALSE. It is a consequence (via monotonicity from E ⊆ S), not an axiom." },

  { id: "tf2_2", c: 2, t: "tf",
    q: "If A and B are disjoint with P(A), P(B) > 0, then A and B are independent.",
    a: "F",
    e: "FALSE. Disjoint events are dependent: P(A∩B) = 0, but P(A)P(B) > 0. If A happened, you know B didn't." },

  { id: "tf2_3", c: 2, t: "tf",
    q: "If A and B are independent, so are A^c and B^c.",
    a: "T",
    e: "TRUE. Independence is preserved under complements on either or both events." },

  { id: "tf2_4", c: 2, t: "tf",
    q: "P(A ∪ B) = P(A) + P(B) always.",
    a: "F",
    e: "FALSE. Only when A, B are disjoint. In general, subtract P(A ∩ B)." },

  { id: "tf2_5", c: 2, t: "tf",
    q: "By De Morgan's law, (A ∩ B)^c = A^c ∩ B^c.",
    a: "F",
    e: "FALSE. (A ∩ B)^c = A^c ∪ B^c (union, not intersection). Remember: 'not (A and B)' = 'not A OR not B'." },

  { id: "tf2_6", c: 2, t: "tf",
    q: "Order matters in a combination.",
    a: "F",
    e: "FALSE. Combinations ignore order (committees, hands of cards). Permutations care about order (president/treasurer)." },

  { id: "tf2_7", c: 2, t: "tf",
    q: "P(A | B) is always equal to P(B | A).",
    a: "F",
    e: "FALSE — and this is the single biggest Bayes trap. The diagnostic-test example shows they can differ by 100×." },

  { id: "tf2_8", c: 2, t: "tf",
    q: "The number of circular arrangements of n distinct objects is (n−1)!.",
    a: "T",
    e: "TRUE. Dividing n! by the n rotations gives (n−1)!." },

  { id: "tf2_9", c: 2, t: "tf",
    q: "A sample where only sports club followers see a survey is biased by selection AND voluntary response.",
    a: "T",
    e: "TRUE. Selection bias (narrow audience) plus voluntary response (people with strong views self-select)." },

  { id: "tf2_10", c: 2, t: "tf",
    q: "Complementary events are always disjoint.",
    a: "T",
    e: "TRUE. A ∩ A^c = ∅ by definition. (But disjoint events are NOT always complementary — need their union to be S.)" },

  // ===================== CHAPTER 3 — T/F =====================
  { id: "tf3_1", c: 3, t: "tf",
    q: "A random variable is a function from the sample space to the real line.",
    a: "T",
    e: "TRUE. X : S → ℝ. It is a function, not a number." },

  { id: "tf3_2", c: 3, t: "tf",
    q: "For a discrete r.v., P(X < 3) = P(X ≤ 3) whenever 3 is a possible value.",
    a: "F",
    e: "FALSE. They differ by exactly p(3). The < vs ≤ distinction matters for discrete r.v.'s." },

  { id: "tf3_3", c: 3, t: "tf",
    q: "The cdf of a discrete r.v. is a step function that is right-continuous.",
    a: "T",
    e: "TRUE. Jumps of size p(x) at each possible value, closed on the left, open on the right." },

  { id: "tf3_4", c: 3, t: "tf",
    q: "E(X + Y) = E(X) + E(Y) requires X and Y to be independent.",
    a: "F",
    e: "FALSE. Linearity of expectation ALWAYS holds, independent or not. (Variance of a sum needs independence.)" },

  { id: "tf3_5", c: 3, t: "tf",
    q: "For independent X, Y: Var(X − Y) = Var(X) − Var(Y).",
    a: "F",
    e: "FALSE. Var(X − Y) = Var(X) + Var(Y). The minus becomes a plus because Var(−Y) = Var(Y)." },

  { id: "tf3_6", c: 3, t: "tf",
    q: "Var(aX + b) = a²·Var(X).",
    a: "T",
    e: "TRUE. The shift b drops out; the scale a gets squared." },

  { id: "tf3_7", c: 3, t: "tf",
    q: "E(X²) ≥ [E(X)]².",
    a: "T",
    e: "TRUE. Their difference IS the variance, which is always ≥ 0." },

  { id: "tf3_8", c: 3, t: "tf",
    q: "If Var(X) = 0, then X is a constant with probability 1.",
    a: "T",
    e: "TRUE. Σ(x − μ)²·p(x) = 0 forces every possible value to equal μ." },

  { id: "tf3_9", c: 3, t: "tf",
    q: "E(X) must be one of the possible values of X.",
    a: "F",
    e: "FALSE. For a fair die, E(X) = 3.5 — not a possible value." },

  { id: "tf3_10", c: 3, t: "tf",
    q: "The population mean μ and the sample mean x̄ are the same thing.",
    a: "F",
    e: "FALSE. μ is a fixed parameter of the model; x̄ is a statistic computed from data. x̄ estimates μ." },

  // --- Chapter 3.3-3.5 T/F ---
  { id: "tf3_11", c: 3, t: "tf",
    q: "For a continuous r.v., P(X < 5) = P(X ≤ 5).",
    a: "T",
    e: "TRUE. For a continuous r.v., P(X = x) = 0 for every x, so endpoint inclusion doesn't matter." },

  { id: "tf3_12", c: 3, t: "tf",
    q: "A probability density function f(x) must satisfy f(x) ≤ 1 everywhere.",
    a: "F",
    e: "FALSE. The density is NOT a probability. It can be arbitrarily large — only its integral over an interval gives a probability." },

  { id: "tf3_13", c: 3, t: "tf",
    q: "For a Poisson distribution, mean equals variance.",
    a: "T",
    e: "TRUE. E(X) = Var(X) = λ. This is the Poisson fingerprint — it's unusual among distributions." },

  { id: "tf3_14", c: 3, t: "tf",
    q: "The exponential distribution has the memoryless property.",
    a: "T",
    e: "TRUE. P(X > s+t | X > s) = P(X > t). It is the only continuous memoryless distribution." },

  { id: "tf3_15", c: 3, t: "tf",
    q: "Chebyshev's inequality requires the distribution to be normal.",
    a: "F",
    e: "FALSE. Chebyshev works for ANY distribution with finite mean and variance — that's its power. For normal, it's loose; for weird shapes, it still works." },

  { id: "tf3_16", c: 3, t: "tf",
    q: "If M_X = M_Y in a neighborhood of 0, then X and Y have the same distribution.",
    a: "T",
    e: "TRUE. The MGF uniquely determines the distribution." },

  { id: "tf3_17", c: 3, t: "tf",
    q: "For any random variable X, M_X(0) = 1.",
    a: "T",
    e: "TRUE. M_X(0) = E(e⁰) = E(1) = 1. If your computed MGF doesn't equal 1 at t=0, you made an error." },

  { id: "tf3_18", c: 3, t: "tf",
    q: "For independent X and Y, M_{X+Y}(t) = M_X(t) + M_Y(t).",
    a: "F",
    e: "FALSE. For independent X, Y: M_{X+Y}(t) = M_X(t) · M_Y(t) — MULTIPLY the MGFs, not add." },

  { id: "tf3_19", c: 3, t: "tf",
    q: "If X ~ Binomial(n, p), then as n → ∞ with np = λ constant, X approaches a Poisson(λ) distribution.",
    a: "T",
    e: "TRUE. The Poisson approximation to the binomial. Useful when n is large and p is small." },

  { id: "tf3_20", c: 3, t: "tf",
    q: "If X ~ N(μ, σ²), then (X − μ)/σ ~ N(0, 1).",
    a: "T",
    e: "TRUE. This is standardization. It is the key trick for all normal probability calculations." }

];
