/* Connected investigation dialogue; evidence stays in pm25.js. */
(function(){
const narrative={
  "acts": [
    {
      "id": 1,
      "title": "A question the street cannot answer",
      "scenes": [
        "street"
      ]
    },
    {
      "id": 2,
      "title": "Find people in time",
      "scenes": [
        "cohort"
      ]
    },
    {
      "id": 3,
      "title": "Connect the records to the air",
      "scenes": [
        "exposure"
      ]
    },
    {
      "id": 4,
      "title": "Find the signal, then disturb the average",
      "scenes": [
        "results",
        "pattern",
        "inequity"
      ]
    },
    {
      "id": 5,
      "title": "Challenge the case",
      "scenes": [
        "checks",
        "limits"
      ]
    },
    {
      "id": 6,
      "title": "Return with a better question",
      "scenes": [
        "return"
      ]
    }
  ],
  "scenes": [
    {
      "id": "street",
      "act": 1,
      "question": "How could we investigate something this street cannot show us?",
      "conclusion": "A view of the city cannot answer a question about years of exposure.",
      "exitLabel": "Follow the guide to the archive",
      "beats": [
        {
          "id": "street-1",
          "speaker": "GUIDE",
          "text": "The windows are lit. The clinic is still open. But this corner cannot tell us what long-term fine-particle exposure means for mental health.",
          "exhibit": false
        },
        {
          "id": "street-2",
          "speaker": "YOU",
          "text": "Then watching the street will not settle it. What would count as evidence?",
          "exhibit": false
        },
        {
          "id": "street-3",
          "speaker": "GUIDE",
          "text": "People, places, and time. Come to the archive: we need to connect all three before we can investigate.",
          "exhibit": false
        }
      ],
      "background": "../assets/images/stories/pm25/street-v2.webp",
      "position": "50% 50%"
    },
    {
      "id": "cohort",
      "act": 2,
      "question": "What can a newly recorded diagnosis actually tell us?",
      "conclusion": "The study follows new diagnosis records in two potentially overlapping cohorts.",
      "exitLabel": "Find the air around those addresses",
      "beats": [
        {
          "id": "cohort-1",
          "speaker": "GUIDE",
          "text": "Two files, two outcomes: anxiety and depression. Each begins with no recorded diagnosis of that outcome, then follows later health records. Some people appear in both.",
          "exhibit": true
        },
        {
          "id": "cohort-2",
          "speaker": "YOU",
          "text": "So we are looking for a new entry in a record. Before connecting it to the air, I want to check how to read that entry.",
          "exhibit": false,
          "choices": [
            {
              "id": "inspect-diagnosis",
              "label": "Inspect the diagnosis labels",
              "response": "The anxiety file includes a broader family of diagnoses, including stress-related disorders; depression uses its own diagnosis codes. These are medical records, not a direct measure of everyone's symptoms.",
              "exhibit": true,
              "artifact": {
                "type": "findings",
                "eyebrow": "OPEN FILE / DIAGNOSIS LABELS",
                "heading": "What enters\na health record?",
                "rows": [
                  {
                    "label": "ANXIETY FAMILY",
                    "text": "Includes anxiety, obsessive-compulsive, stress-related, dissociative and somatoform disorders."
                  },
                  {
                    "label": "DEPRESSION",
                    "text": "Diagnostic codes F32–F33."
                  },
                  {
                    "label": "WHAT IS MISSED",
                    "text": "Symptoms that never become a recorded diagnosis."
                  }
                ],
                "foot": "Methods §2.3 · Outcomes depend on care and recording."
              }
            },
            {
              "id": "inspect-followup",
              "label": "Follow the calendar",
              "response": "During the 2018–2022 study period, the analysis follows later records after excluding pre-baseline diagnoses of the same outcome. That orders the records; it does not tell us exactly when symptoms began.",
              "exhibit": true,
              "artifact": {
                "type": "steps",
                "eyebrow": "OPEN FILE / THE CALENDAR",
                "heading": "Follow the records\nthrough time.",
                "steps": [
                  {
                    "title": "At baseline",
                    "text": "Exclude prior recorded diagnosis of the respective outcome."
                  },
                  {
                    "title": "May 2018–December 2022",
                    "text": "Observe later electronic health records in the study period."
                  },
                  {
                    "title": "A new recorded diagnosis",
                    "text": "The first observed entry is not necessarily the first symptom."
                  }
                ],
                "foot": "Methods §§2.1–2.3 · No exact symptom-onset date."
              }
            }
          ]
        }
      ],
      "background": "../assets/images/stories/pm25/archive-v2.webp",
      "position": "50% 50%"
    },
    {
      "id": "exposure",
      "act": 3,
      "question": "How does a person's address become an exposure estimate?",
      "conclusion": "The assigned exposure describes an area and a year, not a person's inhaled dose.",
      "exitLabel": "Compare the exposure groups",
      "beats": [
        {
          "id": "exposure-1",
          "speaker": "YOU",
          "text": "The records give us a timeline. But where does the air enter the story?",
          "exhibit": false
        },
        {
          "id": "exposure-2",
          "speaker": "GUIDE",
          "text": "Through the baseline address. A fine pollution grid becomes an annual outdoor PM₂.₅ estimate for a three-digit ZIP area. That area estimate is then assigned to the participant.",
          "exhibit": true,
          "choices": [
            {
              "id": "zoom-home",
              "label": "Zoom in on a home",
              "response": "The participant data cannot follow that zoom. They do not reveal indoor air, daily routes, or later moves. A fine source grid still becomes a broad area estimate here.",
              "exhibit": true,
              "artifact": {
                "type": "findings",
                "eyebrow": "ZOOM / THE DATA STOP HERE",
                "heading": "The home is visible.\nPersonal dose is not.",
                "rows": [
                  {
                    "label": "AVAILABLE",
                    "text": "A baseline three-digit ZIP and annual outdoor concentration."
                  },
                  {
                    "label": "UNAVAILABLE",
                    "text": "Indoor air, daily travel and later residential moves."
                  }
                ],
                "foot": "Conceptual city illustration · not a measured street map."
              }
            },
            {
              "id": "rebuild-map",
              "label": "Rebuild the ZIP estimate",
              "response": "The supplement tries four ways to combine the grid values. They agree closely across the sampled ZIP areas. That supports this aggregation choice, while personal exposure remains unmeasured.",
              "exhibit": true,
              "artifact": {
                "type": "metrics",
                "eyebrow": "SUPPLEMENT / TABLE S2",
                "heading": "Rebuild the\narea estimate.",
                "rows": [
                  {
                    "label": "Aggregation approaches",
                    "value": "4",
                    "detail": "Simple, area, population and combined weights"
                  },
                  {
                    "label": "Sampled ZIP areas",
                    "value": "200",
                    "detail": "Correlations with combined weights ≥0.971"
                  }
                ],
                "foot": "Agreement in aggregation does not validate personal dose."
              }
            }
          ]
        },
        {
          "id": "exposure-3",
          "speaker": "GUIDE",
          "text": "Now we have the connection: a residential-area estimate beside a diagnosis timeline. Do the records show a different pattern at higher exposure?",
          "exhibit": false
        }
      ],
      "background": "../assets/images/stories/pm25/map-v2.webp",
      "position": "50% 50%"
    },
    {
      "id": "results",
      "act": 4,
      "question": "Does an association remain after accounting for measured differences?",
      "conclusion": "The highest-exposure group has a higher adjusted hazard for both outcomes.",
      "exitLabel": "Look between the two endpoints",
      "beats": [
        {
          "id": "results-1",
          "speaker": "YOU",
          "text": "But those areas—and the people in them—could differ in other ways.",
          "exhibit": false
        },
        {
          "id": "results-2",
          "speaker": "GUIDE",
          "text": "Exactly. The model accounts for measured personal and community differences, then compares the highest-exposure quarter with the lowest. The adjusted hazard ratios are 1.10 for anxiety and 1.45 for depression.",
          "exhibit": true
        },
        {
          "id": "results-3",
          "speaker": "GUIDE",
          "text": "These compare the hazards of newly recorded diagnoses; they do not forecast one person's future. And a comparison of the two ends may hide what happens in between.",
          "exhibit": true
        }
      ],
      "background": "../assets/images/stories/pm25/observatory.png",
      "position": "50% 50%"
    },
    {
      "id": "pattern",
      "act": 4,
      "question": "What did the high-versus-low comparison conceal?",
      "conclusion": "Anxiety and depression do not share the same exposure–response pattern.",
      "exitLabel": "Find whose experiences the average hides",
      "beats": [
        {
          "id": "pattern-1",
          "speaker": "YOU",
          "text": "Let's open the space between the lowest and highest groups.",
          "exhibit": false
        },
        {
          "id": "pattern-2",
          "speaker": "GUIDE",
          "text": "Depression is already elevated in the middle exposure groups; anxiety shows its clearest elevation in the highest. One headline number hid two patterns. It could hide differences between people, too.",
          "exhibit": true
        }
      ],
      "background": "../assets/images/stories/pm25/observatory.png",
      "position": "50% 50%"
    },
    {
      "id": "inequity",
      "act": 4,
      "question": "Is the overall association shared across different social conditions?",
      "conclusion": "The overall average hides exploratory differences; their mechanisms remain untested.",
      "exitLabel": "Take the finding to the test bench",
      "beats": [
        {
          "id": "inequity-1",
          "speaker": "YOU",
          "text": "Whose experience disappears when we average everyone together?",
          "exhibit": false
        },
        {
          "id": "inequity-2",
          "speaker": "GUIDE",
          "text": "The higher-versus-lower pollution association was stronger among Black participants. Before interpreting that difference, choose which comparison we should unpack.",
          "exhibit": true,
          "choices": [
            {
              "id": "unpack-race",
              "label": "Unpack the racial-group comparison",
              "response": "Each estimate compares higher with lower pollution within a group. It is not Black participants' risk relative to White participants. The proposed social and structural explanations were not directly tested.",
              "exhibit": true,
              "artifact": {
                "type": "findings",
                "eyebrow": "UNPACK / THE COMPARISON",
                "heading": "Within each group,\ncompare exposure.",
                "rows": [
                  {
                    "label": "THE CONTRAST",
                    "text": "Higher versus lower pollution within a subgroup."
                  },
                  {
                    "label": "THE INTERACTION",
                    "text": "Race/ethnicity interaction p < 0.001 for both outcomes."
                  },
                  {
                    "label": "THE EXPLANATION",
                    "text": "Social and structural pathways are hypotheses, not tested mechanisms."
                  }
                ],
                "foot": "Results §3.2 · Exact disputed subgroup figures omitted."
              }
            },
            {
              "id": "inspect-conditions",
              "label": "Inspect insurance and deprivation",
              "response": "For anxiety, the association also differed by insurance and community deprivation. The study does not establish those same differences for depression; a larger subgroup estimate alone cannot establish a difference.",
              "exhibit": true,
              "artifact": {
                "type": "findings",
                "eyebrow": "UNPACK / SOCIAL CONDITIONS",
                "heading": "Which differences\nare supported?",
                "rows": [
                  {
                    "label": "ANXIETY × INSURANCE",
                    "text": "Interaction p = 0.006."
                  },
                  {
                    "label": "ANXIETY × DEPRIVATION",
                    "text": "Interaction p < 0.001."
                  },
                  {
                    "label": "DEPRESSION",
                    "text": "No supporting interaction p-value reported for these two modifiers."
                  }
                ],
                "foot": "Exploratory comparisons · no multiplicity correction."
              }
            }
          ]
        },
        {
          "id": "inequity-3",
          "speaker": "GUIDE",
          "text": "The average is no longer the whole story. These exploratory findings leave the explanations open. Now we should ask whether the signal survives a change in the analysis.",
          "exhibit": false
        }
      ],
      "background": "../assets/images/stories/pm25/street-v2.webp",
      "position": "50% 50%"
    },
    {
      "id": "checks",
      "act": 5,
      "question": "Could another pollutant or the residence assumption account for the signal?",
      "conclusion": "Selected sensitivity checks retain positive associations without resolving every bias.",
      "exitLabel": "Inspect what the tests could not reach",
      "beats": [
        {
          "id": "checks-1",
          "speaker": "YOU",
          "text": "Before we bring this back to the city, I want to challenge the finding. Which alternative explanation should we test?",
          "exhibit": false,
          "choices": [
            {
              "id": "test-ozone",
              "label": "Account for ozone as well",
              "response": "After annual ozone is added to the model, the high-versus-low PM₂.₅ associations remain positive for both outcomes. This checks one other pollutant; it does not isolate a causal effect of PM₂.₅.",
              "exhibit": true,
              "artifact": {
                "type": "findings",
                "eyebrow": "TEST / ANNUAL OZONE ADJUSTMENT",
                "heading": "Does the PM₂.₅\nassociation remain?",
                "rows": [
                  {
                    "label": "ANXIETY",
                    "text": "HR 1.13 · 95% CI 1.05–1.22"
                  },
                  {
                    "label": "DEPRESSION",
                    "text": "HR 1.45 · 95% CI 1.34–1.58"
                  }
                ],
                "foot": "Table S8 · Q4 vs Q1 · adjusted for ozone, not all pollutants."
              }
            },
            {
              "id": "test-residency",
              "label": "Focus on longer-term residents",
              "response": "Among people at their baseline residence for more than five years, associations remain positive under the supplement's alternative annual exposure measure. Their later moves are still unknown.",
              "exhibit": true,
              "artifact": {
                "type": "cohorts",
                "eyebrow": "TEST / MORE THAN FIVE YEARS",
                "heading": "A more stable\nbaseline residence.",
                "rows": [
                  {
                    "label": "Anxiety analysis",
                    "value": "35,850",
                    "detail": "Positive high-versus-low exposure association"
                  },
                  {
                    "label": "Depression analysis",
                    "value": "41,098",
                    "detail": "Positive high-versus-low exposure association"
                  }
                ],
                "foot": "Table S7 · alternative annual exposure · later moves unknown."
              }
            }
          ]
        },
        {
          "id": "checks-2",
          "speaker": "GUIDE",
          "text": "The finding survives this check. That matters—but a sensitivity analysis can only test the choices its data allow. What did the study never get to see?",
          "exhibit": false
        }
      ],
      "background": "../assets/images/stories/pm25/archive-v2.webp",
      "position": "50% 50%"
    },
    {
      "id": "limits",
      "act": 5,
      "question": "Which missing evidence could still change the interpretation?",
      "conclusion": "The evidence supports an association, while intervention effects remain untested.",
      "exitLabel": "Return to the street with the evidence",
      "beats": [
        {
          "id": "limits-1",
          "speaker": "YOU",
          "text": "Then the missing evidence is part of the case, too. What could still change our reading?",
          "exhibit": false
        },
        {
          "id": "limits-2",
          "speaker": "GUIDE",
          "text": "Moves we cannot follow. Illness that never reaches a record. Smoking, activity, diet, and occupation that the model could not include. These gaps leave room for other explanations.",
          "exhibit": true
        },
        {
          "id": "limits-3",
          "speaker": "YOU",
          "text": "So the records show an association, with unanswered explanations. They do not tell us how many diagnoses a clean-air policy would prevent.",
          "exhibit": false
        }
      ],
      "background": "../assets/images/stories/pm25/map-v2.webp",
      "position": "50% 50%"
    },
    {
      "id": "return",
      "act": 6,
      "question": "What can we responsibly bring back to the city?",
      "conclusion": "Mental health and unequal conditions belong in air-quality research and discussion.",
      "exitLabel": "Read the research brief",
      "beats": [
        {
          "id": "return-1",
          "speaker": "GUIDE",
          "text": "Back at the same corner. Mental health belongs in the air-quality conversation—and the average may miss unequal experiences. The evidence gives us a reason to investigate both.",
          "exhibit": false
        },
        {
          "id": "return-2",
          "speaker": "YOU",
          "text": "I came looking for a verdict about this street. I leave with a sharper question: would reducing exposure improve mental health, and who would benefit? That needs another study.",
          "exhibit": false
        }
      ],
      "background": "../assets/images/stories/pm25/street-v2.webp",
      "position": "50% 50%"
    }
  ]
};
const data=window.RESEARCH_STORY;
if(!data)return;
data.acts=narrative.acts;
narrative.scenes.forEach(n=>Object.assign(data.scenes.find(s=>s.id===n.id),n));
})();
