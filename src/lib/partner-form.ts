/**
 * PARTNER FORM TODO
 * -----------------
 * The homepage "Partner interest form" does not submit anywhere yet.
 * `submitPartnerLead` is the only hook. The page calls it and then stops.
 *
 * To wire it up later, replace the body of this function with a request
 * to the River intake (API, form backend, or CRM). Keep the argument
 * shape the same so the form does not need to change.
 *
 * Do not add a destination until the founder has one. The form must not
 * pretend a message was delivered.
 */
export interface PartnerLead {
  fullName: string;
  businessType: string;
  city: string;
  mobile: string;
}

export async function submitPartnerLead(lead: PartnerLead): Promise<void> {
  // TODO(partner-form): send `lead` to the partner intake endpoint.
  void lead;
}
