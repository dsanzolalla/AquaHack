export type WaterPoint = {
    point_id: string;
    city: string;
    location_name: string;
    last_check_date: string;
    type: 'WELL' | 'SPRING' | 'FOUNTAIN' | 'DISTRIBUTION_TRUCK';
    position: { lat: number; lng: number };
};

export const waterPoints: WaterPoint[] = [
    // Batch 1: Kampala
    { point_id: 'WP-001', city: 'Kampala', location_name: 'Owiino Market Tap Stand 3', last_check_date: '2025-10-15', type: 'FOUNTAIN', position: { lat: 0.306, lng: 32.574 } },
    { point_id: 'WP-002', city: 'Kampala', location_name: 'Bwaise Slum Protected Spring', last_check_date: '2025-09-01', type: 'SPRING', position: { lat: 0.344, lng: 32.56 } },
    { point_id: 'WP-003', city: 'Kampala', location_name: 'Katwe Community Borehole', last_check_date: '2024-11-20', type: 'WELL', position: { lat: 0.298, lng: 32.571 } },
    { point_id: 'WP-004', city: 'Kampala', location_name: 'Nakasero Market Water Kiosk', last_check_date: '2025-10-20', type: 'FOUNTAIN', position: { lat: 0.315, lng: 32.58 } },
    { point_id: 'WP-005', city: 'Kampala', location_name: 'Kamwokya Emergency Truck Point', last_check_date: '2025-10-28', type: 'DISTRIBUTION_TRUCK', position: { lat: 0.337, lng: 32.589 } },
    { point_id: 'WP-006', city: 'Wakiso', location_name: 'Nansana Town Council Well', last_check_date: '2025-05-10', type: 'WELL', position: { lat: 0.366, lng: 32.522 } },
    { point_id: 'WP-007', city: 'Wakiso', location_name: 'Kireka Market Public Tap', last_check_date: '2025-07-30', type: 'FOUNTAIN', position: { lat: 0.347, lng: 32.639 } },
    // Batch 2: Norte de Uganda
    { point_id: 'WP-008', city: 'Gulu', location_name: 'Gulu Main Market Borehole', last_check_date: '2025-08-05', type: 'WELL', position: { lat: 2.775, lng: 32.298 } },
    { point_id: 'WP-009', city: 'Gulu', location_name: 'Pece Division Public Tap', last_check_date: '2025-04-11', type: 'FOUNTAIN', position: { lat: 2.768, lng: 32.305 } },
    { point_id: 'WP-010', city: 'Arua', location_name: 'Arua Hospital Borehole', last_check_date: '2025-09-15', type: 'WELL', position: { lat: 3.03, lng: 30.908 } },
    { point_id: 'WP-011', city: 'Arua', location_name: 'Arua Central Market Tap', last_check_date: '2025-09-16', type: 'FOUNTAIN', position: { lat: 3.024, lng: 30.912 } },
    { point_id: 'WP-012', city: 'Yumbe', location_name: 'Bidi Bidi Settlement (Zone 1) Truck Point', last_check_date: '2025-10-25', type: 'DISTRIBUTION_TRUCK', position: { lat: 3.371, lng: 31.332 } },
    { point_id: 'WP-013', city: 'Yumbe', location_name: 'Bidi Bidi Settlement (Zone 3) Borehole', last_check_date: '2024-12-01', type: 'WELL', position: { lat: 3.42, lng: 31.428 } },
    { point_id: 'WP-014', city: 'Lira', location_name: 'Lira University Community Well', last_check_date: '2025-02-20', type: 'WELL', position: { lat: 2.26, lng: 32.886 } },
    { point_id: 'WP-015', city: 'Kitgum', location_name: 'Kitgum Central Primary School Well', last_check_date: '2025-03-18', type: 'WELL', position: { lat: 3.284, lng: 32.882 } },
    { point_id: 'WP-016', city: 'Adjumani', location_name: 'Adjumani Refugee Camp Water Point 7', last_check_date: '2025-07-07', type: 'FOUNTAIN', position: { lat: 3.376, lng: 31.782 } },
    // Batch 3: Este de Uganda
    { point_id: 'WP-017', city: 'Jinja', location_name: 'Nile Crescent Protected Spring', last_check_date: '2025-06-12', type: 'SPRING', position: { lat: 0.443, lng: 33.203 } },
    { point_id: 'WP-018', city: 'Jinja', location_name: 'Jinja Central Market Tap Stand', last_check_date: '2025-10-02', type: 'FOUNTAIN', position: { lat: 0.428, lng: 33.204 } },
    { point_id: 'WP-019', city: 'Jinja', location_name: 'Walukuba Housing Estate Borehole', last_check_date: '2025-01-30', type: 'WELL', position: { lat: 0.41, lng: 33.221 } },
    { point_id: 'WP-020', city: 'Mbale', location_name: 'Mbale Main Market Water Point', last_check_date: '2025-08-14', type: 'FOUNTAIN', position: { lat: 1.077, lng: 34.175 } },
    { point_id: 'WP-021', city: 'Mbale', location_name: 'Wanale Hillside Protected Spring', last_check_date: '2025-03-25', type: 'SPRING', position: { lat: 1.09, lng: 34.22 } },
    { point_id: 'WP-022', city: 'Moroto', location_name: 'Moroto Town (Camp Swahili) Borehole', last_check_date: '2025-09-05', type: 'WELL', position: { lat: 2.534, lng: 34.666 } },
    { point_id: 'WP-023', city: 'Moroto', location_name: 'Rupa Sub-county Emergency Truck Point', last_check_date: '2025-10-27', type: 'DISTRIBUTION_TRUCK', position: { lat: 2.58, lng: 34.75 } },
    { point_id: 'WP-024', city: 'Soroti', location_name: 'Soroti Town Public Tap', last_check_date: '2025-04-22', type: 'FOUNTAIN', position: { lat: 1.715, lng: 33.611 } },
    { point_id: 'WP-025', city: 'Tororo', location_name: 'Tororo Hospital Community Well', last_check_date: '2025-02-15', type: 'WELL', position: { lat: 0.686, lng: 34.18 } },
    { point_id: 'WP-026', city: 'Iganga', location_name: 'Iganga Town Council Borehole', last_check_date: '2024-11-11', type: 'WELL', position: { lat: 0.613, lng: 33.483 } },
    // Batch 4: Oeste de Uganda
    { point_id: 'WP-027', city: 'Mbarara', location_name: 'Mbarara University (MUST) Borehole', last_check_date: '2025-08-30', type: 'WELL', position: { lat: -0.614, lng: 30.647 } },
    { point_id: 'WP-028', city: 'Mbarara', location_name: 'Ruharo Community Water Tap', last_check_date: '2025-09-20', type: 'FOUNTAIN', position: { lat: -0.605, lng: 30.64 } },
    { point_id: 'WP-029', city: 'Mbarara', location_name: 'Nyamitanga Protected Spring', last_check_date: '2025-01-10', type: 'SPRING', position: { lat: -0.622, lng: 30.65 } },
    { point_id: 'WP-030', city: 'Kasese', location_name: 'Kasese Town Central Borehole', last_check_date: '2025-05-19', type: 'WELL', position: { lat: 0.183, lng: 30.088 } },
    { point_id: 'WP-031', city: 'Kasese', location_name: 'Bwera Hospital Water Point', last_check_date: '2025-04-05', type: 'FOUNTAIN', position: { lat: 0.038, lng: 29.757 } },
    { point_id: 'WP-032', city: 'Hoima', location_name: 'Hoima Town Community Well', last_check_date: '2025-07-21', type: 'WELL', position: { lat: 1.428, lng: 31.353 } },
    { point_id: 'WP-033', city: 'Fort Portal', location_name: 'Fort Portal Market Tap Stand', last_check_date: '2025-08-01', type: 'FOUNTAIN', position: { lat: 0.655, lng: 30.274 } },
    { point_id: 'WP-034', city: 'Fort Portal', location_name: 'Kabarole Hillside Spring', last_check_date: '2025-03-03', type: 'SPRING', position: { lat: 0.67, lng: 30.29 } },
    // Batch 5: Suroeste de Uganda
    { point_id: 'WP-035', city: 'Kabale', location_name: 'Kabale Central Market Tap', last_check_date: '2025-09-28', type: 'FOUNTAIN', position: { lat: -1.25, lng: 29.989 } },
    { point_id: 'WP-036', city: 'Kabale', location_name: 'Kigezi Hill Protected Spring', last_check_date: '2025-04-16', type: 'SPRING', position: { lat: -1.26, lng: 29.99 } },
    { point_id: 'WP-037', city: 'Kabale', location_name: 'Lake Bunyonyi (Bufuka) Community Well', last_check_date: '2024-10-30', type: 'WELL', position: { lat: -1.29, lng: 29.91 } },
    { point_id: 'WP-038', city: 'Isingiro', location_name: 'Nakivale Settlement (Base Camp) Well', last_check_date: '2025-08-18', type: 'WELL', position: { lat: -0.835, lng: 30.958 } },
    { point_id: 'WP-039', city: 'Isingiro', location_name: 'Nakivale Settlement (Rubondo) Truck Point', last_check_date: '2025-10-26', type: 'DISTRIBUTION_TRUCK', position: { lat: -0.88, lng: 31.02 } },
    { point_id: 'WP-040', city: 'Kisoro', location_name: 'Kisoro Town Council Borehole', last_check_date: '2025-05-30', type: 'WELL', position: { lat: -1.285, lng: 29.685 } },
    // Batch 6: Región Central
    { point_id: 'WP-041', city: 'Entebbe', location_name: 'Kitoro Market Public Tap', last_check_date: '2025-10-10', type: 'FOUNTAIN', position: { lat: 0.054, lng: 32.463 } },
    { point_id: 'WP-042', city: 'Entebbe', location_name: 'Nakiwogo Landing Site Well', last_check_date: '2025-06-05', type: 'WELL', position: { lat: 0.071, lng: 32.44 } },
    { point_id: 'WP-043', city: 'Gomba', location_name: 'Kisozi Community Borehole', last_check_date: '2025-01-15', type: 'WELL', position: { lat: 0.2336, lng: 31.9509 } },
    { point_id: 'WP-044', city: 'Gomba', location_name: 'Maddu Town Public Tap', last_check_date: '2025-02-05', type: 'FOUNTAIN', position: { lat: 0.088, lng: 31.89 } },
    { point_id: 'WP-045', city: 'Masaka', location_name: 'Masaka Central Market Tap Stand', last_check_date: '2025-09-22', type: 'FOUNTAIN', position: { lat: -0.339, lng: 31.735 } },
    { point_id: 'WP-046', city: 'Masaka', location_name: 'Nyendo Protected Spring', last_check_date: '2024-12-12', type: 'SPRING', position: { lat: -0.31, lng: 31.75 } },
    { point_id: 'WP-047', city: 'Mpigi', location_name: 'Mpigi Town Council Well', last_check_date: '2025-03-14', type: 'WELL', position: { lat: 0.228, lng: 32.32 } },
    { point_id: 'WP-048', city: 'Luwero', location_name: 'Luwero Town Public Tap', last_check_date: '2025-06-20', type: 'FOUNTAIN', position: { lat: 0.85, lng: 32.48 } },
    { point_id: 'WP-049', city: 'Mukono', location_name: 'Mukono University (UCU) Borehole', last_check_date: '2025-08-25', type: 'WELL', position: { lat: 0.354, lng: 32.75 } }
];
