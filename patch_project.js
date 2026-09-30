const fs = require('fs');
const path = require('path');
const { EXTRA_I18N } = require('./extra_i18n.js');

console.log("=== PATCHING PROJECT (ROBUST METHOD) ===");

// 1. Read fresh backup of script.js
fs.copyFileSync('script.js.bak', 'script.js');
let script = fs.readFileSync('script.js', 'utf8');

// 1. In getMatchScoreState
const oldMatchScore = `function getMatchScoreState(score, status, missingReasons, unmatchedReasons) {
  if (status === "Not Currently Eligible" || (unmatchedReasons && unmatchedReasons.length > 0) || score < 50) {
    return {
      cssClass: "match-state-low",
      label: "Not Currently Eligible",
      badgeText: score + "% Not Currently Eligible"
    };
  }
  if (status === "Information Required" || (missingReasons && missingReasons.length > 0) || (score >= 50 && score < 80)) {
    return {
      cssClass: "match-state-info-required",
      label: "Information Required",
      badgeText: "ℹ Information Required"
    };
  }
  return {
    cssClass: "match-state-excellent",
    label: "Likely Eligible",
    badgeText: "Eligibility Match: " + score + "%"
  };
}`;

const newMatchScore = `function getMatchScoreState(score, status, missingReasons, unmatchedReasons) {
  if (status === "Not Currently Eligible" || (unmatchedReasons && unmatchedReasons.length > 0) || score < 50) {
    const lbl = t("not_eligible", "Not Currently Eligible");
    return {
      cssClass: "match-state-low",
      label: lbl,
      badgeText: score + "% " + lbl
    };
  }
  if (status === "Information Required" || (missingReasons && missingReasons.length > 0) || (score >= 50 && score < 80)) {
    const lbl = t("info_required", "Information Required");
    return {
      cssClass: "match-state-info-required",
      label: lbl,
      badgeText: "ℹ " + lbl
    };
  }
  const lbl = t("likely_eligible", "Likely Eligible");
  return {
    cssClass: "match-state-excellent",
    label: lbl,
    badgeText: lbl + ": " + score + "%"
  };
}`;
script = script.replace(oldMatchScore, newMatchScore);

// 2. In initHeroQuickScreener
const oldCount = `if (countBadge) countBadge.textContent = matching.length + ' Schemes Found';`;
const newCount = `if (countBadge) countBadge.textContent = matching.length + ' ' + t("screener_schemes_found", "Schemes Found");\n    window.updateHeroQuickScreenerText = updateQuickMatch;`;
script = script.replace(oldCount, newCount);

// 3. In updateOccupationConditionalFields
const oldCond = `if (btnPersonalNext) {
      btnPersonalNext.innerHTML = isStudent ? "Education Information →" : "Financial Information →";
    }

    if (btnFinPrev) {
      btnFinPrev.innerHTML = isStudent ? "← Education Information" : "← Personal Details";
    }`;

const newCond = `if (btnPersonalNext) {
      btnPersonalNext.innerHTML = isStudent ? t("btn_next_edu", "Education Information →") : t("btn_next_fin", "Financial Information →");
    }

    if (btnFinPrev) {
      btnFinPrev.innerHTML = isStudent ? t("btn_prev_edu", "← Education Information") : t("btn_prev_personal", "← Personal Details");
    }
    window.updateWizardLocalizedButtons = updateOccupationConditionalFields;`;
script = script.replace(oldCond, newCond);

// 4. In renderSchemes (results.html)
script = script.replace(
  `if (resultsCount) {\n      resultsCount.textContent = 'Showing ' + filtered.length + ' matching schemes out of ' + evaluatedSchemes.length + ' verified government schemes';\n    }`,
  `if (resultsCount) {\n      resultsCount.textContent = t("showing_results_prefix", "Showing") + ' ' + filtered.length + ' ' + t("showing_results_mid", "matching schemes out of") + ' ' + evaluatedSchemes.length + ' ' + t("showing_results_suffix", "verified government schemes");\n    }\n    const pageHeadingSub = document.querySelector(".page-heading p");\n    if (pageHeadingSub) {\n      pageHeadingSub.innerHTML = t("results_sub_prefix", "Based on your profile and document status, we found") + ' <strong>' + filtered.length + '</strong> ' + t("results_sub_suffix", "matching schemes for you.");\n    }\n    window.refreshResultsPage = renderSchemes;`
);

script = script.replace(
  `const documentLabels = {
          aadhaar: "Aadhaar Card",
          income_cert: "Income Certificate",
          caste_cert: "Category Certificate",
          marksheet: "Marksheet",
          student_id: "College Bonafide",
          bank_account: "Bank Passbook",
          domicile_cert: "Domicile Certificate",
          disability_cert: "Disability Certificate"
        };`,
  `const documentLabels = {
          aadhaar: t("doc_aadhaar", "Aadhaar Card"),
          income_cert: t("doc_income_cert", "Income Certificate"),
          caste_cert: t("doc_caste_cert", "Category Certificate"),
          marksheet: t("doc_marksheet", "Marksheet"),
          student_id: t("doc_student_id", "College Bonafide"),
          bank_account: t("doc_bank_account", "Bank Passbook"),
          domicile_cert: t("doc_domicile_cert", "Domicile Certificate"),
          disability_cert: t("doc_disability_cert", "Disability Certificate")
        };`
);

script = script.replace(
  `return '<span class="doc-tag ' + (hasDoc ? "present" : "pending") + '">' + (hasDoc ? "✓ Uploaded" : "○ Upload pending") + ' · ' + label + '</span>';`,
  `const docStatus = hasDoc ? t("doc_uploaded", "✓ Uploaded") : t("doc_pending", "○ Upload pending");\n        return '<span class="doc-tag ' + (hasDoc ? "present" : "pending") + '">' + docStatus + ' · ' + label + '</span>';`
);

script = script.replace(
  `<div class="card-actions">
              <a href="scheme-details.html?id=\${encodeURIComponent(scheme.id)}" class="btn btn-primary btn-sm">
                View Details →
              </a>
              <a href="\${escapeHtml(scheme.application_url)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
                Official Portal ↗
              </a>
            </div>`,
  `<div class="card-actions">
              <a href="scheme-details.html?id=\${encodeURIComponent(scheme.id)}" class="btn btn-primary btn-sm">
                \${t("btn_view_details", "View Details →")}
              </a>
              <a href="\${escapeHtml(scheme.application_url)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
                \${t("btn_official_portal", "Official Portal ↗")}
              </a>
            </div>`
);

script = script.replace(
  `<p class="benefit-text"><strong>Benefit:</strong> \${escapeHtml(scheme.benefits)}</p>`,
  `<p class="benefit-text"><strong>\${t("label_benefit", "Benefit:")}</strong> \${escapeHtml(scheme.benefits)}</p>`
);

script = script.replace(
  `'<li><span style="color: #38bdf8;">✓</span> Primary eligibility criteria satisfied.</li>'`,
  `'<li><span style="color: #38bdf8;">✓</span> ' + t("primary_criteria_satisfied", "Primary eligibility criteria satisfied.") + '</li>'`
);

script = script.replace(
  `<div class="user-chips-row">
              <span class="profile-chip"><strong>Age:</strong> \${profile.age ? profile.age + ' yrs' : 'Not Specified'}</span>
              <span class="profile-chip"><strong>Gender:</strong> \${safeGender}</span>
              <span class="profile-chip"><strong>Education:</strong> \${safeEdu}</span>
              <span class="profile-chip"><strong>Category:</strong> \${safeCat}</span>
              <span class="profile-chip"><strong>Income:</strong> \${incomeStr}</span>
              <span class="profile-chip"><strong>State:</strong> \${safeState}</span>
              <span class="profile-chip"><strong>Domicile:</strong> \${safeDomicile}</span>
              \${profile.academicMarks ? '<span class="profile-chip"><strong>Marks:</strong> ' + profile.academicMarks + '%</span>' : ''}
              \${profile.disabilityStatus === 'Yes' ? '<span class="profile-chip" style="color:#38bdf8;"><strong>PwD:</strong> ' + escapeHtml(profile.disabilityPct || '40%+') + '</span>' : ''}
            </div>
          </div>
          <div>
            <a href="find-schemes.html" class="btn btn-outline btn-sm">✏️ Edit Profile</a>
          </div>`,
  `<div class="user-chips-row">
              <span class="profile-chip"><strong>\${t("chip_age", "Age:")}</strong> \${profile.age ? profile.age + ' ' + t("years_suffix", "yrs") : t("not_specified", "Not Specified")}</span>
              <span class="profile-chip"><strong>\${t("chip_gender", "Gender:")}</strong> \${safeGender}</span>
              <span class="profile-chip"><strong>\${t("chip_education", "Education:")}</strong> \${safeEdu}</span>
              <span class="profile-chip"><strong>\${t("chip_category", "Category:")}</strong> \${safeCat}</span>
              <span class="profile-chip"><strong>\${t("chip_income", "Income:")}</strong> \${incomeStr}</span>
              <span class="profile-chip"><strong>\${t("chip_state", "State:")}</strong> \${safeState}</span>
              <span class="profile-chip"><strong>\${t("chip_domicile", "Domicile:")}</strong> \${safeDomicile}</span>
              \${profile.academicMarks ? '<span class="profile-chip"><strong>' + t("chip_marks", "Marks:") + '</strong> ' + profile.academicMarks + '%</span>' : ''}
              \${profile.disabilityStatus === 'Yes' ? '<span class="profile-chip" style="color:#38bdf8;"><strong>' + t("chip_pwd", "PwD:") + '</strong> ' + escapeHtml(profile.disabilityPct || '40%+') + '</span>' : ''}
            </div>
          </div>
          <div>
            <a href="find-schemes.html" class="btn btn-outline btn-sm">\${t("btn_edit_profile", "✏️ Edit Profile")}</a>
          </div>`
);

// 5. In initSchemeDetailsPage
script = script.replace(
  `function initSchemeDetailsPage() {\n  const container = document.getElementById("scheme-details-container");\n  if (!container) return;`,
  `function initSchemeDetailsPage() {\n  window.refreshSchemeDetailsPage = initSchemeDetailsPage;\n  const container = document.getElementById("scheme-details-container");\n  if (!container) return;`
);

script = script.replace(
  `\${isAttached ? "✓ Uploaded" : "⚠️ Missing"}`,
  `\${isAttached ? t("doc_uploaded", "✓ Uploaded") : t("doc_missing", "⚠️ Missing")}`
);

script = script.replace(
  `            <button type="button" id="read-details-aloud-btn" class="btn btn-voice btn-sm">\n              🔊 Read Scheme Details\n            </button>`,
  `            <button type="button" id="read-details-aloud-btn" class="btn btn-voice btn-sm">\n              \${t("btn_read_details", "🔊 Read Scheme Details")}\n            </button>`
);

script = script.replace(
  `\${docReadiness.percentage}% Documents Ready`,
  `\${docReadiness.percentage}% \${t("docs_ready_suffix", "Documents Ready")}`
);

script = script.replace(
  `<h4>ℹ️ Statutory Information &amp; Advisory</h4>`,
  `<h4>\${t("sec_advisory", "ℹ️ Statutory Information & Advisory")}</h4>`
);

script = script.replace(
  `<span>✓</span> Why this scheme matches your profile`,
  `<span>✓</span> \${t("sec_why_matches", "Why this scheme matches your profile")}`
);

script = script.replace(
  `<span>⚠️</span> Criteria requiring verification / Missing details`,
  `<span>⚠️</span> \${t("sec_missing_criteria", "Criteria requiring verification / Missing details")}`
);

script = script.replace(
  `<h3>🎁 Benefits &amp; Financial Assistance</h3>`,
  `<h3>\${t("sec_benefits", "🎁 Benefits & Financial Assistance")}</h3>`
);

script = script.replace(
  `<p class="benefit-text"><strong>Primary Entitlement:</strong> \${escapeHtml(scheme.benefits)}</p>`,
  `<p class="benefit-text"><strong>\${t("primary_entitlement", "Primary Entitlement:")}</strong> \${escapeHtml(scheme.benefits)}</p>`
);

script = script.replace(
  `<h3>⚖️ Official Eligibility Criteria</h3>`,
  `<h3>\${t("sec_criteria", "⚖️ Official Eligibility Criteria")}</h3>`
);

script = script.replace(`<th>Target Education Level</th>`, `<th>\${t("th_edu_level", "Target Education Level")}</th>`);
script = script.replace(`<th>Eligible Courses / Disciplines</th>`, `<th>\${t("th_courses", "Eligible Courses / Disciplines")}</th>`);
script = script.replace(`<th>Social Category Requirement</th>`, `<th>\${t("th_category", "Social Category Requirement")}</th>`);
script = script.replace(`<th>Annual Family Income Ceiling</th>`, `<th>\${t("th_income", "Annual Family Income Ceiling")}</th>`);
script = script.replace(`<th>Minimum Marks / Percentile</th>`, `<th>\${t("th_marks", "Minimum Marks / Percentile")}</th>`);
script = script.replace(`<th>Eligible Age Range</th>`, `<th>\${t("th_age", "Eligible Age Range")}</th>`);
script = script.replace(`<th>Gender Eligibility</th>`, `<th>\${t("th_gender", "Gender Eligibility")}</th>`);
script = script.replace(`<th>State &amp; Domicile Criteria</th>`, `<th>\${t("th_state", "State & Domicile Criteria")}</th>`);
script = script.replace(`<th>Disability (PwD) Criteria</th>`, `<th>\${t("th_pwd", "Disability (PwD) Criteria")}</th>`);
script = script.replace(`<th>Minority Community Criteria</th>`, `<th>\${t("th_minority", "Minority Community Criteria")}</th>`);

script = script.replace(
  `<h3>📄 Required Documents Checklist</h3>`,
  `<h3>\${t("sec_docs_checklist", "📄 Required Documents Checklist")}</h3>`
);

script = script.replace(
  `Check your paperwork preparation against official guidelines before initiating your application:`,
  `\${t("sec_docs_checklist_sub", "Check your paperwork preparation against official guidelines before initiating your application:")}`
);

script = script.replace(
  `<h3>📝 How to Apply (Step-by-Step Guidelines)</h3>`,
  `<h3>\${t("sec_how_to_apply", "📝 How to Apply (Step-by-Step Guidelines)")}</h3>`
);

script = script.replace(
  `Important Dates / Application Cycle:`,
  `\${t("lbl_app_cycle", "Important Dates / Application Cycle:")}`
);

script = script.replace(
  `Apply on Official Website ↗`,
  `\${t("btn_apply_official", "Apply on Official Website ↗")}`
);

// 6. Update applyLanguageTranslations
const oldApplyFnRegex = /function applyLanguageTranslations\(langCode\) \{[\s\S]*?renderVoiceCommandHints\(langCode\);\s*\}/;
const newApplyFn = `function applyLanguageTranslations(langCode) {
  if (!langCode || !I18N[langCode]) langCode = "en-IN";
  currentLangCode = langCode;
  localStorage.setItem("schemematch_lang", langCode);
  const dict = I18N[langCode] || I18N["en-IN"];
  const enDict = I18N["en-IN"] || {};

  // 1. Text elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = (dict && dict[key] !== undefined) ? dict[key] : enDict[key];
    if (val !== undefined && val !== null) {
      el.textContent = val;
    }
  });

  // 2. HTML elements
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    const val = (dict && dict[key] !== undefined) ? dict[key] : enDict[key];
    if (val !== undefined && val !== null) {
      el.innerHTML = val;
    }
  });

  // 3. Placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    const val = (dict && dict[key] !== undefined) ? dict[key] : enDict[key];
    if (val !== undefined && val !== null) {
      el.setAttribute("placeholder", val);
    }
  });

  // 4. Titles
  document.querySelectorAll("[data-i18n-title]").forEach(el => {
    const key = el.getAttribute("data-i18n-title");
    const val = (dict && dict[key] !== undefined) ? dict[key] : enDict[key];
    if (val !== undefined && val !== null) {
      el.setAttribute("title", val);
    }
  });

  // 5. Aria Labels
  document.querySelectorAll("[data-i18n-aria-label]").forEach(el => {
    const key = el.getAttribute("data-i18n-aria-label");
    const val = (dict && dict[key] !== undefined) ? dict[key] : enDict[key];
    if (val !== undefined && val !== null) {
      el.setAttribute("aria-label", val);
    }
  });

  // 6. Sync dropdowns
  const langSelects = document.querySelectorAll("#site-lang-select");
  langSelects.forEach(sel => {
    sel.value = langCode;
  });

  // 7. Sync SevaVaani
  const langText = document.getElementById("sevavaani-lang-text");
  if (langText) {
    langText.textContent = langCode.startsWith("hi") ? "HI" : (langCode.substring(0, 2).toUpperCase());
  }

  const langInfo = document.getElementById("voice-modal-lang-info");
  if (langInfo) {
    langInfo.innerHTML = 'Active Voice Language: <strong>' + (dict.langName || "English") + ' (' + langCode + ')</strong>';
  }

  renderVoiceCommandHints(langCode);

  // 8. Re-render dynamic components
  if (typeof window.updateHeroQuickScreenerText === 'function') {
    window.updateHeroQuickScreenerText();
  }

  if (typeof window.refreshResultsPage === 'function') {
    window.refreshResultsPage();
  }

  if (typeof window.refreshSchemeDetailsPage === 'function') {
    window.refreshSchemeDetailsPage();
  }

  if (typeof window.updateWizardLocalizedButtons === 'function') {
    window.updateWizardLocalizedButtons();
  }
}`;
script = script.replace(oldApplyFnRegex, newApplyFn);

// 7. Inject _EXTRA_I18N_DATA and t() helper right before let currentLangCode
const langCodeMarker = 'let currentLangCode = localStorage.getItem("schemematch_lang") || "en-IN";';
const mergeCode = `
// MERGE EXTRA TRANSLATIONS INTO I18N
const _EXTRA_I18N_DATA = ${JSON.stringify(EXTRA_I18N)};
Object.keys(_EXTRA_I18N_DATA).forEach(lang => {
  if (!I18N[lang]) I18N[lang] = {};
  Object.assign(I18N[lang], _EXTRA_I18N_DATA[lang]);
});

function t(key, fallback = "") {
  try {
    const dict = I18N[currentLangCode] || I18N["en-IN"];
    if (dict && dict[key] !== undefined && dict[key] !== null) return dict[key];
    if (I18N["en-IN"] && I18N["en-IN"][key] !== undefined) return I18N["en-IN"][key];
  } catch (e) {}
  return fallback || key;
}
`;
script = script.replace(langCodeMarker, mergeCode + '\n' + langCodeMarker);

fs.writeFileSync('script.js', script, 'utf8');
console.log("-> SAVED updated script.js successfully!");
